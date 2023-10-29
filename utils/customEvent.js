const createCustomEvent = (name) => {
  const event = new CustomEvent(name);
  return event;
};

export const dispatchCustomEvent = (name, element) => {
  const event = createCustomEvent(name);
  element.dispatchEvent(event);
};
