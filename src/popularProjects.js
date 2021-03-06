import styles from  "./styles/project-icons.scss";
import classNames from "classnames";
import DeepAssoc from "./images/deep-assoc.svg";

export default [
    {
        title: 'deep-assoc-completion',
        product: 'https://plugins.jetbrains.com/plugin/9927-deep-assoc-completion/',
        src: 'https://github.com/klesun/deep-assoc-completion',
        svg: true,
        icon: DeepAssoc,
    },
    {
        title: 'deep-js-completion',
        product: 'https://klesun-productions.com/entry/deep-js-completion/',
        src: 'https://github.com/klesun/deep-js-completion',
        svg: true,
        icon: DeepAssoc,
    },
    {
        title: 'deep-assoc-completion-vscode',
        product: 'https://marketplace.visualstudio.com/items?itemName=klesun.deep-assoc-completion-vscode',
        src: 'https://github.com/klesun/deep-assoc-completion-vscode',
        svg: true,
        icon: DeepAssoc,
    },
    {
        title: 'deep-dict-completion',
        product: 'https://klesun-productions.com/entry/deep-dict-completion/',
        src: 'https://github.com/klesun/deep-dict-completion',
        svg: true,
        icon: DeepAssoc,
    },
    {
        title: 'Starve Game',
        product: 'https://klesun-productions.com/entry/starve_game/',
        src: 'https://github.com/klesun/klesun.github.io/tree/master/entry/starve_game',
        icon: styles.starveGame
    },
    {
        title: 'MAL DB',
        product: 'https://klesun-productions.com/entry/mal_db/',
        debUrl: 'https://github.com/klesun/klesun.github.io/tree/master/entry/mal_db',
        icon: styles.malDb
    },
    {
        title: 'Soundfont Player',
        product: 'https://klesun-productions.com/entry/midi_player/',
        src: 'https://github.com/klesun/klesun.github.io/tree/master/entry/midi_player',
        icon: styles.soundFont
    },
    {
        title: 'RPS imba',
        product: 'https://denisbook.com/views/rps-imba/',
        src: 'https://github.com/dogzy123/denisbook/tree/master/views/rps-imba',
        icon: styles.rpsImba
    },
    {
        title: 'denisbook.com',
        product: 'https://denisbook.com/',
        src: 'https://github.com/dogzy123/denisbook',
        icon: styles.denisbook
    },
    {
        title: 'midiana',
        product: 'https://klesun-productions.com/entry/midiana/',
        src: 'https://github.com/klesun/midiana.lv',
        icon: styles.midiana,
    },
    {
        title: 'riddle-needle',
        product: 'https://github.com/klesun/riddle-needle',
        icon: classNames(styles.riddleNeedle, styles.noPixel)
    }
];