import Slideout from 'slideout';

class ToggleSidebar {
    constructor() {
        this.initSidebar();
    }
    initSidebar() {
        let slideout = new Slideout({
            'panel': document.getElementById('js-main-content'),
            'menu': document.getElementById('js-sidebar'),
            'padding': 256,
            'tolerance': 70
        });

        this.toggleSidebar(slideout);
        this.closeSidebar(slideout);
        this.addOverlay(slideout);
    }
    toggleSidebar(slideout) {
        document.getElementById('js-sidebar-btn').addEventListener('click', () => {
            slideout.toggle();
        });
    }
    closeSidebar(slideout) {
        document.getElementById('js-sidebar-close-btn').addEventListener('click', () => {
            slideout.close();
        });
    }
    addOverlay(slideout) {
        slideout
            .on('beforeopen', function () {
                this.panel.classList.add('open');
            })
            .on('beforeclose', function () {
                this.panel.classList.remove('open');
            });
    }
}

export const toggleSidebar = new ToggleSidebar();
