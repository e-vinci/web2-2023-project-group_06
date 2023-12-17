const readPrivacy = 'readed';

const setPrivacy = () => {
    localStorage.setItem(readPrivacy, 'true');
};

const checkPrivacy = () => localStorage.getItem(readPrivacy) === 'true';

export { setPrivacy, checkPrivacy };