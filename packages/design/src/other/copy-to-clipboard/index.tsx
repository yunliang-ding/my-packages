import { Message } from "../..";

const copyToClipBoard = async (text, tips) => {
  /** navigator clipboard 需要https等安全上下文 */
  if (navigator.clipboard && window.isSecureContext) {
    setTimeout(async () => {
      await navigator.clipboard.writeText(text);
      if (tips) {
        Message.success('已复制到剪切板');
      }
    });
  } else {
    // 创建textarea
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // 使textarea不在viewport，同时设置不可见
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const res = await new Promise((resolve, reject) => {
      document.execCommand('copy') ? resolve(true) : reject();
      textArea.remove();
    });
    if (tips && res) {
      Message.success('已复制到剪切板');
    }
  }
};

export default ({ children, message, text = '' }) => {
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={async () => {
        await copyToClipBoard(text, message);
      }}
    >
      {children}
    </div>
  );
};
