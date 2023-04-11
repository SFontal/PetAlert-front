import GreetingStyled from "./GreetingStyled";
import Button from "../Button/Button";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";

const Greeting = (): JSX.Element => {
  const { username, isLogged } = useAppSelector((state) => state.user);

  const { logoutUser } = useUser();
  const logoutHandler = () => {
    logoutUser();
  };

  return isLogged ? (
    <GreetingStyled className="user-info" aria-label="user info">
      <div className="user-info__greeting greeting">
        <div className="greeting__hello hello">
          <h3 className="hello__text">{`Hi, ${username}!`}</h3>
          <button
            className="hello__logout"
            onClick={logoutHandler}
            aria-label="logout"
            title="logout"
          >
            <svg
              width="141"
              height="156"
              viewBox="0 0 141 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_2454)">
                <path
                  d="M40.8239 73.1949C36.8127 73.4046 32.8018 73.6066 28.791 73.8033C28.5619 73.8143 28.3316 73.8202 28.1013 73.826C27.4183 73.826 26.7365 73.8817 26.0626 73.993C23.92 74.4073 22.8368 75.6119 23.089 77.2897C23.2419 78.3008 24.0981 79.9553 25.2478 80.3036C27.6003 81.057 30.0405 81.5011 32.5071 81.6241C36.8348 81.7697 41.4748 81.7503 47.1052 81.5626C62.571 81.0479 78.0361 80.5146 93.5012 79.9618C101.839 79.6698 110.177 79.3786 118.515 79.0886C119.483 79.0536 120.471 79.0614 121.72 79.0711L122.488 79.0763C121.867 79.7132 121.267 80.3262 120.688 80.9172C118.701 82.9497 116.984 84.7052 115.269 86.5332C113.642 88.268 112.021 90.0584 110.453 91.7899C109.378 92.9784 108.299 94.1649 107.217 95.3501C105.468 97.2499 103.706 99.1375 101.957 101.011L99.6348 103.498C99.5393 103.601 99.4793 103.732 99.4625 103.872C99.4458 104.012 99.4729 104.152 99.5412 104.275L100.726 106.387C100.783 106.49 100.867 106.576 100.969 106.635C101.07 106.695 101.186 106.726 101.303 106.726C101.38 106.726 101.457 106.713 101.529 106.687C101.744 106.609 101.959 106.545 102.166 106.484C102.666 106.366 103.143 106.167 103.579 105.897C115.202 97.8092 126.338 89.0408 136.93 79.6362C137.972 78.7319 138.895 77.7001 139.679 76.5641C141.406 74.0163 141.002 71.2562 138.597 69.19C137.983 68.689 137.33 68.2372 136.644 67.8404L132.828 65.479C125.119 60.7048 117.15 55.7697 109.287 50.9466C108.13 50.1343 106.818 49.5689 105.434 49.286C104.793 49.242 104.15 49.3495 103.557 49.5995C102.964 49.8495 102.437 50.2354 102.019 50.726C101.39 51.6412 101.224 53.5737 101.928 54.5181C103.146 56.1716 104.632 57.609 106.323 58.7705C109.083 60.6328 111.935 62.455 114.688 64.2163C117.052 65.7269 119.496 67.2895 121.869 68.8683C122.321 69.1699 122.807 69.4353 123.275 69.6917C124.431 70.2095 125.446 70.996 126.237 71.9857C125.473 71.9152 124.718 71.8394 123.97 71.763C121.572 71.4769 119.16 71.3196 116.744 71.2931L114.845 71.308C99.6354 71.4271 83.9077 71.5501 68.4438 71.9792C59.2329 72.2356 49.8742 72.723 40.8239 73.1949Z"
                  fill="black"
                />
                <path
                  d="M61.6949 1.97721C59.7594 1.69952 35.0923 0.253946 20.6297 0.17627C18.5839 0.283722 16.3033 0.4568 14.0981 0.624451C12.4794 0.747436 10.8787 0.869414 9.39487 0.963273C5.58453 1.20472 3.20649 3.37646 2.51745 7.24601C2.13176 9.67527 1.90312 12.1269 1.83295 14.5857C0.907144 34.3362 1.1155 54.4132 1.31679 73.8306C1.36496 78.4478 1.40798 83.0657 1.44583 87.6829C1.52067 98.0184 1.74325 108.885 2.12647 120.904C2.30131 126.376 2.5955 131.931 2.88067 137.304C3.05938 140.677 3.23809 144.05 3.3897 147.424C3.58325 151.673 5.24263 153.897 8.94648 154.857C11.04 155.321 13.1756 155.567 15.3194 155.59L16.2742 155.635C18.9194 155.764 21.9465 155.824 25.1904 155.824C39.0026 155.824 56.6807 154.8 64.7304 154.283C65.7502 154.217 66.7076 153.765 67.4056 153.017C68.1044 152.268 68.4921 151.279 68.4895 150.254C68.4869 149.228 68.094 148.243 67.3914 147.498C66.6895 146.753 65.7302 146.305 64.7097 146.245C59.3723 145.93 49.5426 145.339 43.6774 144.927C38.1871 144.538 32.5994 144.294 27.1949 144.06C24.0897 143.926 20.9845 143.792 17.8807 143.629C16.8793 143.558 15.8823 143.433 14.8942 143.255C14.56 143.201 14.2233 143.147 13.882 143.096C13.8368 142.816 13.791 142.548 13.7471 142.29C13.6096 141.576 13.5126 140.854 13.4568 140.129C13.24 136.208 12.9891 132.223 12.7471 128.369C12.1665 119.193 11.5684 109.704 11.4 100.371C11.1136 84.5539 11.142 68.4632 11.1749 52.9018C11.1844 47.915 11.1905 42.9281 11.1936 37.9405C11.1936 30.4441 11.3471 22.9977 11.4968 16.7021C11.5342 15.1246 11.7007 13.5581 11.8929 11.743C11.9704 11.0148 12.051 10.2543 12.1278 9.44457C14.3781 9.29181 19.031 9.18041 24.7923 9.04383C39.5458 8.69299 59.7516 8.21133 63.4936 6.48303C63.5811 6.44258 63.6587 6.38352 63.7211 6.30985C63.7835 6.23617 63.8292 6.15018 63.8549 6.05699C64.0321 5.57891 64.104 5.06748 64.0657 4.55884C64.0275 4.0502 63.8798 3.55593 63.6329 3.10999C63.4114 2.79112 63.1233 2.52496 62.7885 2.32931C62.4538 2.13367 62.0805 2.01324 61.6949 1.97721Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_2454">
                  <rect
                    width="140"
                    height="156"
                    fill="white"
                    transform="translate(0.777344)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <span className="greeting__phrase phrase">
          It's <span className="phrase__highlighted">woof!</span> to see you
          again.
        </span>
      </div>
      <svg
        className="user-info__image"
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116 115"
        width="116"
        height="115"
      >
        <defs>
          <image
            width="114"
            height="113"
            id="img1"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAABxCAMAAAA+lwfhAAAAAXNSR0IB2cksfwAAAvRQTFRF/////v7++fn5/f39+vr6/Pv86enpr6+vcnJyQkJCKCgoJCQkMDAwWFhYq6ur9/f34+Pjzc3Ntra2lpaWgICAZmZmW1tbSUlJPT09ODg4Pj4+aGhol5eXt7e3zs7O6Ojo+Pj429vbenp6JSUlAwMDAgICAAAAAQEBCAgITExM3d3dsLCwWlpaOTk5Hx8fHh4egYGBsrKy5eXldHR0ExMTCQkJPz8/dnZ2nZ2dh4eHOzs7Ojo66+vr4eHhcXFxNDQ0DQ0NSEhIZWVlc3Nze3t7hYWFfn5+XV1dDg4ODAwMm5ubIiIid3d30tLSk5OTDw8Pampq6urqwsLCycnJ19fX3t7eGxsbHR0dX19fkJCQs7Oz1dXV4uLi8vLy8/Pz1tbWHBwcERERfX195OTkgoKCx8fHXFxcBQUFEBAQKysrVVVViIiIy8vLqKioVFRUBgYGQUFBrKys2dnZ0NDQjIyMCgoKBwcHISEhubm59vb2aWlp4ODgoKCg1NTUmpqaJiYmTU1NoaGhKSkp8fHxFxcX09PT7+/vsbGxbGxsvb292traqqqqp6anLy8vnJycRkZGNjY2lZWVTk5OQEBAiYmJNzc3f39/u7u7vr6+8PDwT09Pb29vV1dXi4uLhoaGpKSkwcHBUlFS5+fnj4+PYmJiurq69fX1oqKiZGRkIyMjMjIyGBgYtLS0jo6OFBQUmZmZra2txsbGYWFhVlZWuLi47u7uo6OjjY2NFhYW3NzclJSUzMzM7OzsFRUVv7+/R0dHU1NTMTExeHh4bW1txcXFUFBQz8/PpaWlXl5eLCws4+PjKioqhISE6+vreXl5RUVFMzMzS0tL7u7uxMTEREREa2trLS0twMDAcHBw4ODgyMjI/f//kpKSGhoa/P/++Pr52Nva19nZdXh3GRwbAgQDIyUkVVdWe319k5aVoKOipaenn6KhCQsKAwUFAAEAAAIBwsTEiYuLZGZlR0lILS8vJScmISQj+/399vn49fj3+vz8+fv6+hR2MgAAAPx0Uk5TAAAAAAAAYP//////////AMD//////////////////3AA//////////////////////+g////////////QOD/////////////////////////UP/////////////QAAD/////sP///////////////////////////wD/8P////////8A//8A////////////////////////AP//////////gP///wD//////////////////xD///////8w/////////////////7D//zD/////AP///////+D/AP//AAD//////////////////////////////wAAAAAAOPiaXAAADh1JREFUeJy1Wnl4FEUWfzXVBeQgAwoJIMdAul8FEAIkEchFSFRIQMOdcMcEnBAIQ0ACISjIJSICCqhcCkECERRBUESRQzxYd1VWUdcD97533cvVXf/Zqp4J6ZnuhBq+2feFYaa7+v3qvXpnVQMoERF/LkosF4j5g8prlFB5W/zTGGnVuk1UdExs2ziXvKvGvZEjCfpt/rnbtb/p5g4d4xM6dRbUJSH+lg5du3XvIZi7gHg0Ad+zV6JuoIEck3q3A00LB5EGgxLSp2+HW/v1R845ckN8IPo/EJP7xQ8Y2AcYgUEpqTpPu23wzUOGpiPPyATSPEQIUcrEp0aY1BgQmhWXPSxHcsec5M7D43Pzbr9D0J0pHUckdE4eKXANIz8jr2/BKMSY0XdJDprr7kI+Rh1RiDe2+7jxEzLlDzaxoPckqayiTsWTp0ydNl3yMXkxOZ8Z02ZOmVzcqUTg6ty4p7QMwCOJ0Fk8taeyjDD73mQv5+VzKubOq5yfiuhLXVBatdA6KSrJVD0xaWZVrwU5xvBFQBgz71HoEYP3qYpJqtK4sbgoRywaVus6LokvyKJCME1jJr/GNSYmsokg1wEWLq0BT2AS0oCXYYKKxcrBtSVG9PL7a/vMeyB+hZG68sEyYRkuQdQCF/wMIeZ0WLDJdcVVq9VkhFJcsxZMw4F1D7WX/zHSyFqJRYDGJaXepQa5OgPXM+FRhElnFnhhmHoQZRXqD6uN3JBmPOx3EAI104Xp3Sjm6jX4iNrIjZicdUMQoeR51NikMo6yUr6Z3aAqg0nbwh9TgqSPY0fCIgFJtuI2FUQC23EuhJMBmqfNOEAFEnqMwo0sMpC9jScURhGYucb7ZFh5rnlaafRSgnyqemTPG/XEEHqc5ymMolCFqTsiA0l24i4VSLKJr3JFSMrdqCIlIXt4ekRcRNCtSpAA2VgRXvRunjpiR6VxxZgbIbeEFJwPCmtEuhhPk8hAkj24RcUspi/BAuqKCCR7xpikkKPJvPykvRBG+dkS7U1LU8jRdDJGZ0JkAh7pMwmrFOxihLFPa07/xPmGR34wsE2UQj/jzuvbT90K3O/kI6KQk/N1nDIJLASlwQ9q8CzuvA6eoAOY395pWuIaqyfOUxYGTrVp3XtOh2AjoPSgXtKuZTzB7xB2cpSETXl2e8P2jpVOkG62tvS5e5LyD1ccCblz/2I80nIoI6wuEWfZIEXZvDZK5z7RkmCnedRje+75FxC9aeVe5Le4wAJBPVvxEGvR/AkMwdQJNkEYHEjlRtTQo9s2e7HwxeClFkrdhViU8uKxcQWdEY+D5bbmmoUxPVqyHyFNFK9wMJGsw5gcR6R1HIgxysdZVSUq9AHofamVrGBAW498quWmBgsLcVOLJktO+LC13+aDqNWW6O6gud01Gpm5im8/aeHBYNphHAHU7SJsOvOUZtc0TVmYFWmLW7XmnMscsxODExdxlxFR7blOll1rDh5ajMstetCgZsTwdf4FDIxhxN+UmeOPIMZJ9TWH2Leav8yaZikahMF4UH5rbOzkclcYpRDUX2vMsicg+rAaCOCbv6OMxJPN16ju7bhAs7ATX2JxsOjaCNPINcisgrHQZJZyc8LlbhKbwPiibBE4rmnlWL6R23zMHoBJR6wqoHRiA24LhLFGFnIXIUhPFKwBgsEr/NSroDV1aU9wfMBZsS7SLR87BlkrgaXVeJ+DObVANXQK6u2haXODkM3e/IeJg5wa9GzAOWODrnnIaRRdRVjJk5HX0DhhgRQmvQKjJ4qQaBv7+jA8NTvUJZ819IPhJU8C7c4YBdb2l8AbhcbZeqA25Z7D6o1aSA5xD+O+RyCseo+RzPP8af+eRQCSkSHIjxNP0MyEhWSjQ/+Qla8nLXWYXktEtAQcTayQwnEu6HhH8CgP7EH9TVugI1Xcl3YxXEj2lqjrgiAFtUVjuVVdGvT18pUOVpKnj1w8M0xIRm7F52joVoa7C6aNqyFNYWbCKDyfyYIxxQOes7w6fxqE1VILbziOKzKJFVJWDRsacFUtDQhKwH0WD7/NQqxEPDFxJOpnVqsUv5bHXJCrT3rb/sjFF3zpOwKhjcFQPe0dG2MRZOK8SRjjFpEkDEjhxWPQ29c+FXimWiTTwCqJ0u8WqeQQzqzmXczHzSxMSAZtOE62XdY8UIp8f2B3rAOW1MoQE7Llq62O5mnGIdJCsnMiCqMRdztcZlCBOd1MMTMT8YIrODb7x0zB6nzsagmxsspz0WkvX1iWcvdsj2l99jDhhlLD6D/daZ49LuGqVvLLFL18vP22sLxDWJik3xRisHR/kaGLsiut8yaPYG8vWjxwAZN8T0GoOUq6mI/HRV6DbXwYdZgtqysxYkeW1Fn1ShmM5nh4ePG+FUnonb8DHFo0F8nWyzGbak4KmMt9rYkH8rA3UNt9zXWfvuItYxizcqWwkfOKH4nB9XvbejGe2ndOiEbW8zR+aYdzZD6LsS4iVntBqJBCMrL6PV68G5dZY4isADGqxixtREI3+Am7YomHLMOikby1UzYg2ux831GAAt4wCEJSs0huP+ZrusXqB60LqUH7JN8JkQTkli94OuEIe/ciypzjRtt9OBwc8ixhrt2YIEtNfjRkSmICFwuNC69yPag/IbAcG34SCNkazPJusUMKTVTw9wc6RQPJgcRhg+hS5mNibbCUGtQ+ig3Tn8HoumB223iUp/EXO+2LdTtBruQprB+en+6EKXQaXQvk/nK+2UM8mrnTS2VPR3vGorebaVhW0uAO/ODatNgs/NC+lhRq0o1XyNIcvl6eJYTc1eCy95wU9gEDF2TKoEqE04iygx2chEkvA+wT1hPEjmzisT9tvESGG4fsDk9h7BysBK0XYgcIrV8ZxHn1ShlbRVfBY6pqAlOaMfADjmdaQw1s4a8EsdTgI0xa5M/4lD1Z7WSWBDbco78hvO4t9LWph6BjAI2ILPlxYNjdOagPeyLuo3lP3nzlPQMxYYKwt3WfGAdDgmDmHL4ezIMRWLcdt+ywRwIC3XnhWsq0zMu6EfUUNB7dmKAHEnn5XeZiCJc41ls3vIbPZ3AD0y73NQPNhP7GpyGdOBuAOQNBVvQTP6jWn7QBmtECY1rJKFm/3svTPh7yKvHDgudYcT4WDoQApIu4xn2WnrjmhZLEhG3dmaa5JOQZ7+xQjnUf4pqjP5s4vrQB9T2gaTYxGdzOe0u2IlOcSBcSnNqafffLcRv35w5bzPUPP2/KEkyEITLt/kUL11GhFBeDZiDJ28kcU89UI6Y+AE4dFSOP4y4w91Q0zf3OuVT/eaNMBdWXJtc3aUOalitgCh4Z7mT/alOsNDXaM/4M+go/Sekp7dGeoUi7ZHzQX23Ljp2O8a7alxH73qUuu0sPeKh1n8ZcYHkG2HhNQJb1x2dsQYuC9noxJqy2llNfBIhKySqxsCyQ76TPzcKPaf2OzEwPIxB6DAshZ1qMsAy9l4MYlAz1nWVOkDI4i6743LUMK5TVFR91mweMgeNHGz//OL84BD7ATh7bbXH9S+xc4wgpblbp+Ii1363EwzvAPPKjjIbKGORB4jur+QR9jRs5TUPFbJfjpZPOkDB+Et4mbeJaiPg0p3omkCb2jlJeA9nwFeed1zWOboKEvpg4DVwe0qgmCXf1C7jqIp8m64e7U2uFtrAIB6oeQhK4uNhXzUfUm9WGpV300Nn6qXamPwdKRFPEr68C23QPnnpKlCIWCKGq51UhKVT6SopRj1pEaZPOTQHewJyoe/MOvubWmqSEq/DzW7245FPQguySJhifqUIyOI3nZ1zxGmeu7DX3OALhvHbgm0sMubWGRnreOK0R8uovfvkrzi9nmUWMFWKZca6Z3UYbaaIoOgfakETkv/7Nb3/3+z/88U8FA95cOWcxcv3wvXm5O6NFQPF9+ES3rBn1g17rei7HwKLT9sKe7ee3zVCEZPAuLhPAdXO3//kvf/3mG1Mw1DFpUsasiVKMHhffj00TVyatWtFfHs7HjG5HXJ5QNqSSvzfWgb0TUS0Dt4mFEX78t7//45//+vbf387ZOj/7sSkLZfiUQYrR+m4pj8qXKozq/i8trzODuY3PXlwzUU1IAjWjcLmQUtQn330H8PX3//ne5d/qlm8RCAcR4V94Cd3Q+uCDL7bfAf4gbefdHVOnqm03EKgd6ZWbKQLgvz/88LU0EWkWLvkCgX+LToAy2mjImtbMWy8T8r2L1BpxCp+nlc/zW19jdCE28r86YQla9qn3ecG4CEpOwqDSWFIHTYNNyGuMHMkRsmwUTlHAA+kjk/GS5mfevJTXh6Rmwafoltn6WXB+JyQcIjOe40cVgw951xgR5v6LI7kzcL/isZ37Y7wzEoeKdLOoodX25Gacx9MROcdciaMVIctKjIciAElgN15RWx46tVp3PIkKkyjci7mKfMbxNRsioFcGucIM1TBf5ImDwGl/OjzSYIzRVnGB9mO/purmxslF1vOdiuYzGPdFAFFks2y8rChlMX83AohCvgui81aLPptxcAQQBWQpRqkNpcPwywggikK91EhXG9pqhVEZEUg6gGeo5csNX6m+Q9cyETJXFfJYTtLaSEBSeAX7qb0NfAJHvh4ZyNuxn1q+3Ij9nbenwiQmINPVIEXwiciLIhKyi1r0uVPEjEhBblV75+QWPB6RV1PckMd7q0lZgW0iEXzAA7vwLbUYm457IoEIGsnFeJWBBFZhQUQgGTmOxdfXl+h16k/xqohAUtLWuEI919UsIWXlvhMRgWTwOKYorCWFeUk58yICCXSffp/CcTaFpUbqzMhAwudDT15/LUXHOrVoQWRejFMlgTno5P+P/f8AvjbqWkLpoh8AAAAASUVORK5CYII="
          />
        </defs>
        <style></style>
        <use href="#img1" x="1" y="1" />
      </svg>
    </GreetingStyled>
  ) : (
    <GreetingStyled className="guest-info" aria-label="guest info">
      <div className="guest-info__greeting greeting">
        <div className="greeting__hello hello">
          <h3 className="hello__text">Hello human!</h3>
        </div>
        <span className="greeting__phrase phrase">
          Come on <span className="phrase__highlighted">in!</span>
        </span>
      </div>
      <div className="guest-info__buttons buttons">
        <Button
          className="buttons__login"
          text="Login!"
          path="/login"
          ariaLabel="link to login page"
          isLink={true}
        />
        <Button
          className="buttons__register"
          text="Register!"
          path="/"
          ariaLabel="link to user register page"
          isLink={true}
        />
      </div>
    </GreetingStyled>
  );
};

export default Greeting;
