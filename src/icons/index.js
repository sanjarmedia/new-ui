export const NextIcon = props => (
  <svg
    width='6'
    height='10'
    viewBox='0 0 6 10'
    fill='none'
    className={props.className}
    {...props}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 1L5 5L1 9' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
export const Next2Icon = props => (
  <svg
    width='8'
    height='14'
    viewBox='0 0 8 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='stroke-black group-hover:stroke-primary'
    {...props}
  >
    <path d='M1 1L7 7L1 13' strokeWidth='1.5' strokeLinejoin='round' />
  </svg>
)

export const PlayIcon = props => (
  <svg width='18' height='22' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M18 11L9.2855e-07 21.3923L1.83707e-06 0.607695L18 11Z' fill='white' />
  </svg>
)

export function PlusIcon(props) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path d='M0 10H20' stroke='#007AFC' strokeWidth='2' />
      <path d='M10 0L10 20' stroke='#007AFC' strokeWidth='2' />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg
      width='20'
      height='2'
      viewBox='0 0 20 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path d='M0 1H20' stroke='#007AFC' strokeWidth='2' />
    </svg>
  )
}

export function DisLike(props) {
  return (
    <svg
      width='26'
      height='24'
      viewBox='0 0 26 24'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path d='M26 1.90735e-06L21.2727 1.49408e-06L21.2727 14.4L26 14.4L26 1.90735e-06ZM-9.63183e-07 13.2C-1.07911e-06 14.526 1.05773 15.6 2.36364 15.6L9.82682 15.6L8.69818 21.084C8.67455 21.204 8.65682 21.33 8.65682 21.462C8.65682 21.96 8.85773 22.41 9.17682 22.734L10.4355 24L18.2177 16.098C18.6432 15.66 18.9091 15.06 18.9091 14.4L18.9091 2.4C18.9091 1.074 17.8514 1.19497e-06 16.5455 1.08081e-06L5.90909 1.50945e-07C4.92818 6.51917e-08 4.08909 0.605999 3.73455 1.464L0.171363 9.924C0.0649995 10.2 -7.26617e-07 10.494 -7.53368e-07 10.8L-9.54266e-07 13.098L0.0118189 13.11L-9.63183e-07 13.2Z' />
    </svg>
  )
}

export const CheckedIcon = props => (
  <svg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1.5 7.73041L6.45811 12.8047C6.53593 12.8844 6.66382 12.8851 6.74257 12.8064L18.5 1.05054'
      stroke='#007AFC'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const SearchIcon = props => (
  <svg width='15' height='15' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 6.56696C1 3.49241 3.49241 1 6.56696 1C9.64151 1 12.1339 3.49241 12.1339 6.56696C12.1339 9.64151 9.64151 12.1339 6.56696 12.1339C3.49241 12.1339 1 9.64151 1 6.56696ZM6.56696 0C2.94013 0 0 2.94013 0 6.56696C0 10.1938 2.94013 13.1339 6.56696 13.1339C8.2004 13.1339 9.69455 12.5375 10.8436 11.5507L13.145 13.8521C13.3403 14.0474 13.6569 14.0474 13.8521 13.8521C14.0474 13.6569 14.0474 13.3403 13.8521 13.145L11.5507 10.8436C12.5375 9.69455 13.1339 8.2004 13.1339 6.56696C13.1339 2.94013 10.1938 0 6.56696 0Z'
      fill='#ACACAC'
    />
  </svg>
)

export const UnionDownIcon = props => (
  <svg width='8' height='6' viewBox='0 0 8 6' xmlns='http://www.w3.org/2000/svg' className={props.className} {...props}>
    <path d='M1.2207 0C0.359412 0 -0.0989795 1.01628 0.471106 1.6619L3.25333 4.81276C3.6514 5.26356 4.35446 5.26356 4.75252 4.81276L7.53475 1.6619C8.10484 1.01628 7.64645 0 6.78516 0H1.2207Z' />
  </svg>
)

export const Checked3Icon = props => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={props.className}
    {...props}
  >
    <rect width='20' height='20' rx='6' fill='#007AFC' fillOpacity='0.1' />
    <path d='M6 10L9 13L14 8' stroke='#007AFC' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export function ExitIcon(props) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <line x1='3' y1='20.5264' x2='21.1726' y2='2.35373' stroke='#878787' strokeWidth='3.8' strokeLinecap='round' />
      <line x1='2.68701' y1='2' x2='21.2132' y2='20.5262' stroke='#878787' strokeWidth='3.8' strokeLinecap='round' />
    </svg>
  )
}

export function FrameIcon(props) {
  return (
    <svg
      width='30'
      height='29'
      viewBox='0 0 30 29'
      fill='none'
      className={props.className}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <line x1='28.2' y1='6.8' x2='1.8' y2='6.8' strokeWidth='3.6' strokeLinecap='round' />
      <line x1='28.2' y1='14.8' x2='1.8' y2='14.8' strokeWidth='3.6' strokeLinecap='round' />
      <line x1='28.2' y1='22.8' x2='1.8' y2='22.8' strokeWidth='3.6' strokeLinecap='round' />
    </svg>
  )
}
export function CornerIcon(props) {
  return (
    <svg
      width='9'
      height='9'
      viewBox='0 0 9 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path d='M0 1H8V9' strokeWidth='0.5' />
    </svg>
  )
}

export function ColorsIcon(props) {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='19.6' cy='19.6' r='19.6' fill='#007AFC' />
      <path
        opacity='0.3'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.4008 51.5198C44.7513 51.5198 51.5208 44.7504 51.5208 36.3998C51.5208 28.0493 44.7513 21.2798 36.4008 21.2798C28.0502 21.2798 21.2808 28.0493 21.2808 36.3998C21.2808 44.7504 28.0502 51.5198 36.4008 51.5198ZM36.4008 55.9998C47.2256 55.9998 56.0008 47.2246 56.0008 36.3998C56.0008 25.575 47.2256 16.7998 36.4008 16.7998C25.576 16.7998 16.8008 25.575 16.8008 36.3998C16.8008 47.2246 25.576 55.9998 36.4008 55.9998Z'
        fill='#007AFC'
      />
    </svg>
  )
}

export function ResponsiveIcons() {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M51.5196 4.48H33.5996V0H51.5196C53.9938 0 55.9996 2.00576 55.9996 4.48V22.4H51.5196V4.48Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.48039 51.52L22.4004 51.52L22.4004 56L4.48039 56C2.00615 56 0.000389274 53.9942 0.000389491 51.52L0.000391057 33.6L4.48039 33.6L4.48039 51.52Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.48 4.47994L4.48 13.4399L0 13.4399L-3.91654e-07 4.47994C-4.99806e-07 2.00571 2.00576 -5.92155e-05 4.48 -5.93236e-05L13.44 -5.97153e-05L13.44 4.47994L4.48 4.47994Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M51.52 51.5201L51.52 42.5601L56 42.5601L56 51.5201C56 53.9943 53.9942 56.0001 51.52 56.0001L42.56 56.0001L42.56 51.5201L51.52 51.5201Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.77539 51.0563L51.6154 1.21631L54.7832 4.38415L4.94323 54.2242L1.77539 51.0563Z'
        fill='url(#paint0_linear_678_1058)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_678_1058'
          x1='48.9993'
          y1='7.00024'
          x2='7.27931'
          y2='48.7202'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#007AFC' />
          <stop offset='1' stopColor='#007AFC' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}
export function DarkModeIcons() {
  return (
    <svg width='56' height='56' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='20' cy='20' r='20' fill='url(#paint0_radial_678_11317)' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.002 31.998C26.6294 31.998 32.002 26.6255 32.002 19.998C32.002 19.2448 31.9326 18.5078 31.7998 17.793C30.9851 21.347 27.8031 23.998 24.002 23.998C19.5837 23.998 16.002 20.4163 16.002 15.998C16.002 12.1969 18.653 9.01494 22.207 8.2002C21.4922 8.06745 20.7552 7.99805 20.002 7.99805C13.3745 7.99805 8.00195 13.3706 8.00195 19.998C8.00195 26.6255 13.3745 31.998 20.002 31.998Z'
        fill='white'
      />
      <defs>
        <radialGradient
          id='paint0_radial_678_11317'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(-1.13297e-06 44.8) rotate(-50.1944) scale(51.5476)'
        >
          <stop stopColor='#007AFC' stopOpacity='0' />
          <stop offset='0.755854' stopColor='#007AFC' />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function EasyIcon(props) {
  return (
    <svg
      width='56'
      height='56'
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.1536 30.9846L56 52.8311L52.8312 55.9998L30.9848 34.1534L34.1536 30.9846Z'
        fill='url(#paint0_linear_678_1045)'
      />
      <path fillRule='evenodd' clipRule='evenodd' d='M22.4062 13.444V0H26.8876V13.444H22.4062Z' fill='#007AFC' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M30.9859 15.1411L40.4922 5.63477L43.661 8.80354L34.1546 18.3099L30.9859 15.1411Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M35.851 22.4067L49.2949 22.4067L49.2949 26.8881L35.851 26.8881L35.851 22.4067Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.4062 49.2945V35.8506H26.8876V49.2945H22.4062Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.63431 40.4912L15.1406 30.9849L18.3094 34.1536L8.80308 43.66L5.63431 40.4912Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M-0.00060463 22.4067L13.4434 22.4067L13.4434 26.8881L-0.000604825 26.8881L-0.00060463 22.4067Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.80228 5.63479L18.3086 15.1411L15.1398 18.3099L5.6335 8.80357L8.80228 5.63479Z'
        fill='#007AFC'
      />
      <defs>
        <linearGradient
          id='paint0_linear_678_1045'
          x1='54.2176'
          y1='54.6135'
          x2='32.4896'
          y2='34.1699'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#007AFC' />
          <stop offset='1' stopColor='#007AFC' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function GetInBoldIcon(props) {
  return (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.04102 0C1.35066 0 0.791016 0.559644 0.791016 1.25C0.791016 1.94036 1.35066 2.5 2.04102 2.5H12.2327L1.99933 12.7334C1.51118 13.2216 1.51118 14.013 1.99933 14.5012C2.48749 14.9893 3.27894 14.9893 3.7671 14.5012L13.9828 4.28548V14.4418C13.9828 15.1321 14.5424 15.6918 15.2328 15.6918C15.9232 15.6918 16.4828 15.1321 16.4828 14.4418V1.25V0H15.2328H2.04102Z'
        fill='url(#paint0_linear_678_13899)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_678_13899'
          x1='8.84304'
          y1='5.43188e-07'
          x2='19.5584'
          y2='20.563'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopColor='#007AFC' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function DoubleQuotesIcon(props) {
  return (
    <svg width='109' height='100' viewBox='0 0 109 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.2'
        d='M62.1994 0V51.5152H81.5235C79.41 63.3333 73.9751 72.1212 62.1994 74.5455V100C97.8282 91.8182 109 71.8182 109 37.8788V0H62.1994ZM102.055 6.66667V39.3939C102.055 66.3636 93.2992 83.9394 69.144 91.2121V79.0909C84.5429 73.0303 88.1662 61.5151 88.4681 44.8485H69.144V6.66667H102.055ZM0 0V51.5152H19.3241C17.2105 63.3333 11.7756 72.1212 0 74.5455V100C35.6288 91.8182 46.8006 71.8182 46.8006 37.8788V0H0ZM39.856 6.66667V39.3939C39.856 66.3636 31.0997 83.9394 6.9446 91.2121V79.0909C22.3435 73.0303 25.9668 61.5151 26.2687 44.8485H6.9446V6.66667H39.856Z'
        fill='#007AFC'
      />
    </svg>
  )
}

export function GetInIcon(props) {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 1H13V13' strokeWidth='1.5' strokeLinejoin='bevel' />
      <path d='M13 1L1 13' strokeWidth='1.5' />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M17.185 0H2.815C2.06842 0 1.35241 0.296578 0.824497 0.82449C0.296579 1.35242 0 2.06842 0 2.815V17.185C0 17.9316 0.296579 18.6476 0.824497 19.1755C1.35241 19.7034 2.06842 20 2.815 20H9.355V12.7H6.8825V9.85251H9.355V7.75501C9.355 6.56626 9.68375 5.64251 10.3413 4.98626C10.9988 4.32875 11.89 3.99875 13.0162 3.99875C14.1437 3.99875 14.8737 4.0425 15.2075 4.125V6.66001H13.705C13.1625 6.66001 12.7925 6.77501 12.5937 7.00501C12.3962 7.23376 12.2975 7.57876 12.2975 8.03751V9.85251H15.1137L14.7387 12.7H12.2975V20H17.185C17.9316 20 18.6476 19.7034 19.1755 19.1755C19.7035 18.6476 20 17.9316 20 17.185V2.815C20 2.06842 19.7035 1.35242 19.1755 0.82449C18.6476 0.296578 17.9316 0 17.185 0Z'
        fill='#ACACAC'
      />
    </svg>
  )
}

export function YoutubeIcon(props) {
  return (
    <svg width='23' height='18' viewBox='0 0 23 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.8555 1.34253C22.545 2.11963 22.7697 3.88403 22.7697 3.88403C22.7697 3.88403 23 5.95532 23 8.02661V9.96753C23 12.0388 22.7697 14.1101 22.7697 14.1101C22.7697 14.1101 22.545 15.8738 21.8555 16.6494C20.9807 17.6675 20.0005 17.6741 19.5512 17.7334C16.3327 17.9912 11.4993 18 11.4993 18C11.4993 18 5.52006 17.9392 3.6791 17.7429C3.59204 17.7246 3.48672 17.7107 3.36596 17.6946C2.7832 17.6162 1.87044 17.4932 1.14445 16.6487C0.454973 15.873 0.230295 14.1086 0.230295 14.1086C0.230295 14.1086 0 12.0388 0 9.9668V8.02588C0 5.95532 0.230295 3.88403 0.230295 3.88403C0.230295 3.88403 0.454973 2.11963 1.14445 1.34253C1.93504 0.421143 2.81269 0.328125 3.30557 0.276123L3.44881 0.26001C6.66591 0 11.4937 0 11.4937 0H11.5049C11.5049 0 16.3327 0 19.5512 0.26001L19.6944 0.276123C20.1873 0.328125 21.065 0.421143 21.8555 1.34253ZM15.8173 9L8.62763 13.5V4.5L15.8173 9Z'
        fill='#ACACAC'
      />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.1533 0C15.8469 0 17.3388 0.56452 18.3872 1.65324C19.4356 2.70163 20.0002 4.15326 20.0002 5.84682V14.1533C20.0002 15.8872 19.4356 17.3792 18.3469 18.4276C17.2985 19.4356 15.8469 20.0002 14.113 20.0002H5.88714C4.2339 20.0002 2.78228 19.476 1.69356 18.4276C0.56452 17.3388 0 15.8469 0 14.113V5.84682C0 2.33873 2.33873 0 5.84682 0H14.1533ZM17.0566 17.0969C17.7824 16.4114 18.2259 15.4033 18.2259 14.1533V5.84682C18.2259 4.67746 17.8227 3.66938 17.1372 2.94357C16.4114 2.21776 15.4033 1.85485 14.1937 1.85485H5.88714C4.67746 1.85485 3.62906 2.21776 2.94357 2.90325C2.21776 3.62906 1.85485 4.63713 1.85485 5.84682V14.113C1.85485 15.363 2.21776 16.3711 2.94357 17.0969C3.66938 17.7824 4.67746 18.1453 5.88714 18.1453H14.113C15.3227 18.1453 16.3308 17.7824 17.0566 17.0969ZM15.3647 5.84654C16.0105 5.84654 16.534 5.323 16.534 4.67718C16.534 4.03135 16.0105 3.50781 15.3647 3.50781C14.7189 3.50781 14.1953 4.03135 14.1953 4.67718C14.1953 5.323 14.7189 5.84654 15.3647 5.84654ZM10.0012 4.79883C7.17857 4.79883 4.83984 7.09723 4.83984 9.96016C4.83984 12.8231 7.13825 15.1215 10.0012 15.1215C12.8641 15.1215 15.1625 12.7828 15.1625 9.96016C15.1625 7.13756 12.8238 4.79883 10.0012 4.79883ZM10.0012 13.2666C8.18664 13.2666 6.6947 11.7747 6.6947 9.96016C6.6947 8.14563 8.18664 6.65368 10.0012 6.65368C11.8157 6.65368 13.3077 8.14563 13.3077 9.96016C13.3077 11.7747 11.8157 13.2666 10.0012 13.2666Z'
        fill='#ACACAC'
      />
    </svg>
  )
}

export function MessageIcon(props) {
  return (
    <svg width='56' height='48' viewBox='0 0 56 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.9965 30.6225L1.23828 18.2434L3.2418 14.2363L28 26.6154L52.7583 14.2363L54.7618 18.2434L30.0036 30.6225C28.7423 31.2531 27.2578 31.2531 25.9965 30.6225Z'
        fill='url(#paint0_linear_678_7425)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47.04 4.48H8.96C6.48576 4.48 4.48 6.48576 4.48 8.96V38.08C4.48 40.5542 6.48576 42.56 8.96 42.56H47.04C49.5142 42.56 51.52 40.5542 51.52 38.08V8.96C51.52 6.48577 49.5142 4.48 47.04 4.48ZM8.96 0C4.01153 0 0 4.01153 0 8.96V38.08C0 43.0285 4.01153 47.04 8.96 47.04H47.04C51.9885 47.04 56 43.0285 56 38.08V8.96C56 4.01153 51.9885 0 47.04 0H8.96Z'
        fill='#007AFC'
      />
      <defs>
        <linearGradient
          id='paint0_linear_678_7425'
          x1='46.76'
          y1='29.1198'
          x2='2.24001'
          y2='3.35985'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#007AFC' />
          <stop offset='1' stopColor='#007AFC' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function SalesIcon(props) {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.4296 51.5206L8.67159 32.9492L4.19531 33.1319L5.12873 56.0006H50.8696L51.803 33.1319L47.3267 32.9492L46.5687 51.5206H9.4296Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M50.8945 0H5.1055L0 15.3165V15.6797V20.16V26.3197C0 32.196 4.76369 36.9597 10.64 36.9597C14.1383 36.9597 17.2422 35.2714 19.1816 32.6652C21.2318 35.2798 24.4197 36.9597 28 36.9597C31.5803 36.9597 34.7682 35.2798 36.8184 32.6652C38.7578 35.2714 41.8617 36.9597 45.36 36.9597C51.2363 36.9597 56 32.196 56 26.3197V20.16V15.6797V15.3165L50.8945 0ZM51.3987 15.6797L47.6655 4.48H8.3345L4.60127 15.6797H51.3987ZM39.2 20.16H51.52V26.3197C51.52 29.7218 48.7621 32.4797 45.36 32.4797C41.9579 32.4797 39.2 29.7218 39.2 26.3197V20.16ZM21.28 20.16H34.72V25.7597C34.72 29.471 31.7114 32.4797 28 32.4797C24.2886 32.4797 21.28 29.471 21.28 25.7597V20.16ZM4.48 20.16H16.8V26.3197C16.8 29.7218 14.0421 32.4797 10.64 32.4797C7.23793 32.4797 4.48 29.7218 4.48 26.3197V20.16Z'
        fill='url(#paint0_linear_678_7413)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_678_7413'
          x1='20.44'
          y1='-9.51992'
          x2='29.3999'
          y2='24.0798'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#007AFC' stopOpacity='0' />
          <stop offset='1' stopColor='#007AFC' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function SupportIcons(props) {
  return (
    <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28 51.52C40.9897 51.52 51.52 40.9897 51.52 28C51.52 15.0103 40.9897 4.48 28 4.48C15.0103 4.48 4.48 15.0103 4.48 28C4.48 40.9897 15.0103 51.52 28 51.52ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28.0002 35.2802C32.0209 35.2802 35.2802 32.0209 35.2802 28.0002C35.2802 23.9796 32.0209 20.7202 28.0002 20.7202C23.9796 20.7202 20.7202 23.9796 20.7202 28.0002C20.7202 32.0209 23.9796 35.2802 28.0002 35.2802ZM28.0002 39.7602C34.4951 39.7602 39.7602 34.4951 39.7602 28.0002C39.7602 21.5054 34.4951 16.2402 28.0002 16.2402C21.5054 16.2402 16.2402 21.5054 16.2402 28.0002C16.2402 34.4951 21.5054 39.7602 28.0002 39.7602Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.0313 20.3004L46.707 10.1484L49.5076 13.6452L36.8318 23.7972L34.0313 20.3004Z'
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.9991 31.8329L50.0859 41.4492L47.4332 45.0594L34.3464 35.4431L36.9991 31.8329Z
        '
        fill='url(#paint0_linear_678_7404)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.49416 42.3551L19.1699 32.2031L21.9705 35.6999L9.29471 45.8519L6.49416 42.3551Z
        '
        fill='#007AFC'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.56751 10.9423L21.6543 20.5586L19.0015 24.1687L5.91473 14.5524L8.56751 10.9423Z
        '
        fill='url(#paint1_linear_678_7404)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_678_7404'
          x1='48.7595'
          y1='43.2543'
          x2='35.6728'
          y2='33.638'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#007AFC' />
          <stop offset='1' stopColor='#007AFC' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_678_7404'
          x1='20.3279'
          y1='22.3637'
          x2='7.24112'
          y2='12.7474'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#007AFC' />
          <stop offset='1' stopColor='#007AFC' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}
