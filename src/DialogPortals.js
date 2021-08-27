import ReactDOM from 'react-dom';

const canUseDOM = () => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const portals = [];

const DialogPortals = ({ children, tagId }) => {
  if (!canUseDOM()) {
    if (!portals.some(([child, id]) => tagId === id)) {
      portals.push([children, tagId]); // yes, mutation (҂◡_◡)
    }
    return null;
  } else {
    const dialogElement = document.querySelector(`#${tagId}`);
    return ReactDOM.createPortal(children, dialogElement);
  }
};

export default DialogPortals;
