import * as $ from 'jquery';

function createGoogleAnalytics(): object {
    let counter = 0;
    let isDestroyed: boolean = false;

    const listener = (): number => counter++;

    $(document).on('click', listener);

    return {
        destroy() {
            $(document).off('click', listener);
            isDestroyed = true;
        },

        getClicks() {
            if (isDestroyed) {
                return `Analytics is destroyed. Total click = ${counter}`;
            }
            return counter;
        },
    };
}

window['googleAnalytics'] = createGoogleAnalytics();
