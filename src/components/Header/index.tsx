import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'; 

import styles from './style.module.scss';

export function Header() {
    const courrentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="podsasctr" />
            
            <p>O melhor para você ouvir, sempre</p>

            <span>{courrentDate}</span>
        </header>
    )
}