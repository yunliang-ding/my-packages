import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import BundleAnalyzer from 'webpack-bundle-analyzer';
import { ConfigProps } from './type';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

const _WebpackBar: any = WebpackBar;

export default (config: ConfigProps) =>
  ({
    mode: config.mode,
    entry: './src/.theme/app.tsx',
    performance: false, // 去掉性能上的警告
    stats: 'errors-only',
    infrastructureLogging: { level: 'error' },
    externals: {
      axios: 'axios',
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM',
      '@yl-d/icon': 'yldIcon',
      '@yl-d/design': 'yldDesign',
      '@yl-d/shared': 'yldShared',
      '@yl-d/code-editor': 'yldCodeEditor',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.md'],
      alias: {
        '@': resolve('./', './src'),
        lyr: resolve('./', './src/.lyr'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: {
            loader: 'raw-loader', // 构建时间缩短一半
          },
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            // loader: 'ts-loader',
            loader: 'esbuild-loader', // 构建时间缩短一半
            options: {
              // target: 'es2015'
            },
          },
        },
        {
          test: /\.(css|less)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                // modules: true, // 启用 CSS 模块
              },
            },
            'less-loader',
          ],
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'image',
              limit: 1024 * 10, // 图片大于阈值 不会转base64,小于会转base64
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    plugins: [
      config.bundleAnalyzer && config.mode === 'development'
        ? new BundleAnalyzer.BundleAnalyzerPlugin(config.bundleAnalyzer)
        : undefined,
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
      new _WebpackBar({
        basic: false, // 默认true，启用一个简单的日志报告器
        profile: false, // 默认false，启用探查器。
      }),
    ],
  } as Configuration);
