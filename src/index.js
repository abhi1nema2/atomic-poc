import loaders from './loaders.js';

const index = () => {
    const componentOnPage = document.querySelectorAll('[data-component]');
    const componentPromises = [];
    Array.prototype.map.call(componentOnPage, element => {
        const componentName = element.getAttribute('data-component');
        let props = {};
        if (element.getAttribute('data-component')) {
            try {
                props = JSON.parse(element.getAttribute('data-props'));
            } catch (error) {
                console.log(error);
                return false;
            }
        }
        const componentPromise = loaders[componentName](element, props);
        componentPromises.push(componentPromise);
    });

    Promise.all(componentPromises).then(() => {
        return new Promise((resolve) => {
            resolve();
        });
    });
};

index();