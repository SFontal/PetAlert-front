import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header" aria-label="header">
      <div className="header__logo logo">
        <a
          className="logo__home-link link"
          aria-label="link to pet alert home page"
          title="pet alert home"
          href="/"
        >
          <img src="favicon.png" alt="pet alert logo" height={60} width={70} />
          <div className="link__text text">
            <h1 className="text__title">pet alert!</h1>
            <em className="text__subtitle" aria-label="subtitle">
              adopt, rescue, love!
            </em>
          </div>
        </a>
      </div>
      <svg
        width="50"
        height="35"
        viewBox="0 0 117 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8_2482)">
          <path
            d="M0.864068 77.0341C0.571799 78.923 2.12079 81.0778 4.24573 81.7405C5.35826 82.0874 6.51143 82.2871 7.67579 82.3345C8.64785 82.3701 9.61992 82.4129 10.592 82.457C12.8673 82.5575 15.1971 82.6613 17.5262 82.6613C18.462 82.6613 19.3976 82.6444 20.3282 82.6036C24.8587 82.409 29.4586 82.1185 33.9068 81.8378C39.235 81.5025 44.7439 81.1562 50.1635 80.9682C64.2728 80.4799 78.4358 78.5379 92.1329 76.66L93.9098 76.4162C97.1208 75.9772 100.441 75.522 103.679 74.8794C103.822 74.8515 103.97 74.8262 104.12 74.8009C105.421 74.5791 107.386 74.2452 107.892 71.2566C107.919 71.0944 107.886 70.9284 107.799 70.7897C107.711 70.6509 107.576 70.5491 107.418 70.5044C107.077 70.4071 106.762 70.3001 106.464 70.1983C105.852 69.9577 105.21 69.8008 104.556 69.7327L102.492 69.6108C97.73 69.3294 92.8062 69.0389 87.9536 68.9092C74.2028 68.5331 60.4414 68.891 46.7284 69.9811C37.8942 70.6944 28.8994 71.2779 20.2 71.8427C15.7933 72.1287 11.3864 72.4205 6.97967 72.7181C6.03861 72.7596 5.10674 72.9204 4.20618 73.1967C3.3401 73.4483 2.56472 73.9437 1.9722 74.6245C1.37968 75.3047 0.994867 76.1412 0.864068 77.0341Z"
            fill="black"
          />
          <path
            d="M3.22261 43.1126C3.20114 43.8194 3.38035 44.5179 3.73934 45.1271C4.09834 45.7363 4.62234 46.2312 5.25092 46.5545C6.31862 47.0793 7.47905 47.3888 8.66614 47.4655C10.2402 47.5621 11.892 47.6451 13.5692 47.6451C14.3896 47.6451 15.2155 47.625 16.0411 47.5771C20.9662 47.2943 25.9652 46.9598 30.8022 46.6369C39.8573 46.0325 49.2203 45.4049 58.4349 45.0891C70.9782 44.6572 83.5891 43.1159 95.7847 41.6251C98.9821 41.236 102.177 40.8518 105.371 40.4728C105.625 40.4436 105.882 40.4197 106.144 40.3957C108.013 40.2238 110.34 40.0099 112.715 37.4647C112.789 37.3858 112.842 37.2902 112.87 37.1862C112.899 37.0823 112.902 36.9732 112.879 36.8679C112.856 36.7626 112.807 36.6644 112.738 36.5818C112.669 36.4992 112.581 36.4346 112.482 36.3935C108.143 34.6077 104.391 34.3631 100.611 34.2535L97.3115 34.1582C86.8624 33.8541 76.0595 33.5396 65.3903 33.9501C47.4563 34.6413 29.8937 36.3877 10.44 38.4303C8.61132 38.63 6.82891 39.1354 5.16738 39.9255C4.57571 40.219 4.07905 40.674 3.73491 41.2381C3.39077 41.802 3.21322 42.4519 3.22261 43.1126Z"
            fill="black"
          />
          <path
            d="M6.91375 9.30705C8.17852 9.92436 9.54654 10.3015 10.9488 10.4192C11.7179 10.4762 12.4873 10.5351 13.2572 10.5956C16.8104 10.8705 20.4752 11.1544 24.1056 11.1544C24.3862 11.1544 24.6673 11.1545 24.9479 11.1493C31.8107 11.0631 38.7857 10.9028 45.5313 10.7479C54.4808 10.543 63.7354 10.3309 72.8352 10.2887C85.8609 10.2284 98.9463 8.7383 111.602 7.29747L112.008 7.25156C112.805 7.0986 113.567 6.79844 114.256 6.36646C114.716 6.12265 115.239 5.84767 115.88 5.55069C115.995 5.49796 116.092 5.41372 116.161 5.30784C116.23 5.20196 116.267 5.07879 116.268 4.95259C116.27 4.82639 116.235 4.70237 116.169 4.59497C116.103 4.48757 116.007 4.4011 115.894 4.34579C115.233 4.02157 114.677 3.71035 114.186 3.43282C113.416 2.91444 112.552 2.55407 111.641 2.37262L109.155 2.07309C104.324 1.4895 99.3293 0.883162 94.3866 0.676958C67.7565 -0.435762 40.7161 0.608936 14.5669 1.61985L9.87394 1.8008C9.1642 1.82876 8.45912 1.92888 7.76967 2.09969C6.98099 2.24831 6.2604 2.6449 5.71259 3.23176C5.16477 3.81863 4.81819 4.56515 4.72375 5.36261C4.60224 6.16975 4.75133 6.99446 5.14745 7.708C5.54357 8.42154 6.1647 8.9838 6.91375 9.30705Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_8_2482">
            <rect
              width="116"
              height="83"
              fill="white"
              transform="translate(0.777344)"
            />
          </clipPath>
        </defs>
      </svg>
    </HeaderStyled>
  );
};

export default Header;
