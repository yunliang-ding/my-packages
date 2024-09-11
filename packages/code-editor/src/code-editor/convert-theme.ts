export default (theme, addDefaultToken = true, defaultColor = '#ffffff') => {
  if (typeof theme === 'string') {
    theme = JSON.parse(
      theme.replace(/(\/\/").+?[\n\r\t]/g, '').replace(/,[\n\r\t]*\}/, '}'),
    );
  }
  const monacoThemeRule = [];
  const returnTheme = {
    inherit: false,
    base: theme.type === 'light' ? "vs" : "vs-dark",
    colors: theme.colors,
    rules: monacoThemeRule,
    encodedTokensColors: [],
  };
  theme.tokenColors.map((color) => {
    function evalAsArray() {
      if (color.scope) {
        color.scope.map((scope) => {
          monacoThemeRule.push(
            Object.assign({}, color.settings, {
              token: scope,
            }),
          );
        });
      }
    }
    if (typeof color.scope == 'string') {
      const split = color.scope.split(',');
      if (split.length > 1) {
        color.scope = split;
        evalAsArray();
        return;
      }
      monacoThemeRule.push(
        Object.assign({}, color.settings, {
          token: color.scope,
        }),
      );
      return;
    }
    evalAsArray();
  });
  if (addDefaultToken) {
    monacoThemeRule.push({
      token: '',
      foreground: theme.colors['editor.foreground'] || defaultColor,
    });
  }
  return returnTheme;
};
