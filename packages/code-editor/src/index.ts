export { default as FileExplorer } from './file-explorer';
export { default as FileEditor } from './file-editor';
export { default as GitManager } from './git-manager';
export { default as FileSearch } from './file-search';
export { default as CodeEditor } from './code-editor';
export const encrypt = (str: string) => {
  return `{{_#${str}_#}}`;
};
export const decrypt = (str: string, quotation = true) => {
  if (quotation) {
    return str?.replaceAll('"{{_#', '').replaceAll('_#}}"', '');
  }
  return str?.replaceAll('{{_#', '').replaceAll('_#}}', '');
};
