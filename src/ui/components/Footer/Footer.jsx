import AppLogoTitle from '../AppLogoTitle/AppLogoTitle';
import AppStoreBadge from '../Icons/AppStoreBadge/AppStoreBadge';
import PlayStoreBadge from '../Icons/PlayStoreBadge/PlayStoreBadge';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <AppLogoTitle />

      <section className='store-badges'>
        <a target='_blank' href='https://www.apple.com/es/app-store/'>
          <AppStoreBadge />
        </a>

        <a target='_blank' href='https://play.google.com/store/games?gl=ES'>
          <PlayStoreBadge />
        </a>
      </section>

      <div className='footer-text'>
        <p>©️ Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>

        <p>
          Created by{' '}
          <a target='_blank' href='https://titoworld.dev'>
            Cristian Arias
          </a>
        </p>
      </div>
    </footer>
  );
}
