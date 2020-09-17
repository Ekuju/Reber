window.onload = () => {
    const image = document.getElementById('image');
    image.onclick = event => {
        event.preventDefault();
        return false;
    };

    setTimeout(() => {
        image.classList.add('opacity');

        setTimeout(() => {
            image.classList.add('loaded');

            let clicked = false;
            image.onclick = event => {
                event.preventDefault();

                if (clicked) {
                    return false;
                }
                clicked = true;

                image.classList.remove('loaded');
                image.classList.add('moved');

                setTimeout(() => {
                    image.classList.remove('loaded');
                    image.classList.remove('opacity');

                    setTimeout(() => {
                        const div = document.getElementById('div');
                        div.classList.add('opacity');

                        setTimeout(() => {
                            window.location.href = 'https://twitch.tv/roflgator';
                            }, 4000);
                    }, 3000);
                }, 4000);

                return false;
            };

        }, 2000);
    }, 2000);
};