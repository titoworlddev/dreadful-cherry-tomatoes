export default function PlayStoreBadge() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='130' height='40' fill='none'>
      <path
        fill='#000'
        fillRule='evenodd'
        d='M124.23 38.085H5.683c-2.401 0-4.349-1.932-4.349-4.315V5.902c0-2.384 1.948-4.315 4.35-4.315H124.23c2.401 0 4.348 1.931 4.348 4.315V33.77c0 2.383-1.947 4.315-4.348 4.315Z'
        clipRule='evenodd'
      />
      <mask
        id='a'
        width='130'
        height='38'
        x='0'
        y='1'
        maskUnits='userSpaceOnUse'
        style={{ maskType: 'luminance' }}
      >
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M.86 1.114h128.194v37.442H.859V1.114Z'
          clipRule='evenodd'
        />
      </mask>
      <g mask='url(#a)'>
        <path
          fill='#A6A8AB'
          fillRule='evenodd'
          d='M5.683 2.058c-2.135 0-3.873 1.724-3.873 3.844v27.867c0 2.12 1.738 3.843 3.873 3.843H124.23c2.136 0 3.873-1.723 3.873-3.843V5.902c0-2.12-1.737-3.844-3.873-3.844H5.683ZM124.23 38.556H5.683C3.023 38.556.86 36.41.86 33.77V5.902c0-2.64 2.165-4.788 4.824-4.788H124.23c2.66 0 4.824 2.147 4.824 4.788v27.867c0 2.64-2.164 4.787-4.824 4.787Z'
          clipRule='evenodd'
        />
      </g>
      <mask
        id='b'
        width='130'
        height='38'
        x='0'
        y='1'
        maskUnits='userSpaceOnUse'
        style={{ maskType: 'luminance' }}
      >
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M.86 38.557h128.194V1.114H.859v37.443Z'
          clipRule='evenodd'
        />
      </mask>
      <g fillRule='evenodd' clipRule='evenodd' mask='url(#b)'>
        <path
          fill='#FEFEFE'
          d='M102.289 29.345h1.768V17.592h-1.768v11.753Zm15.925-7.518-2.026 5.095h-.061l-2.103-5.096h-1.905l3.154 7.122-1.798 3.962h1.844l4.86-11.083h-1.965Zm-10.027 6.184c-.579 0-1.386-.287-1.386-.998 0-.908 1.005-1.256 1.874-1.256.776 0 1.142.167 1.615.394a2.139 2.139 0 0 1-2.103 1.86Zm.213-6.442c-1.28 0-2.605.56-3.154 1.8l1.57.65c.335-.65.96-.862 1.614-.862.915 0 1.845.544 1.86 1.512v.121c-.32-.182-1.006-.454-1.844-.454-1.691 0-3.413.923-3.413 2.647 0 1.572 1.386 2.586 2.941 2.586 1.188 0 1.843-.53 2.255-1.15h.061v.907h1.706V24.82c0-2.087-1.568-3.25-3.596-3.25Zm-10.925 1.688H94.96v-4.029h2.515a2.044 2.044 0 0 1 2.072 2.015c0 .91-.75 2.014-2.072 2.014Zm-.046-5.665h-4.236v11.753h1.767v-4.452h2.47c1.959 0 3.884-1.408 3.884-3.65 0-2.244-1.925-3.65-3.885-3.65Zm-23.1 10.421c-1.222 0-2.245-1.015-2.245-2.408 0-1.41 1.023-2.439 2.245-2.439 1.205 0 2.152 1.03 2.152 2.439 0 1.393-.947 2.408-2.152 2.408Zm2.029-5.528h-.06c-.398-.47-1.16-.895-2.123-.895-2.014 0-3.861 1.758-3.861 4.015 0 2.242 1.847 3.983 3.861 3.983.962 0 1.725-.424 2.122-.908h.061v.575c0 1.53-.824 2.348-2.152 2.348-1.084 0-1.755-.773-2.03-1.424l-1.542.637c.443 1.06 1.618 2.362 3.572 2.362 2.076 0 3.831-1.212 3.831-4.165v-7.18h-1.679v.652Zm2.9 6.86h1.772V17.591h-1.771v11.754Zm4.382-3.877c-.046-1.545 1.205-2.332 2.106-2.332.702 0 1.297.348 1.496.848l-3.602 1.484Zm5.494-1.333c-.336-.893-1.358-2.545-3.45-2.545-2.075 0-3.8 1.622-3.8 4 0 2.241 1.71 3.998 4 3.998 1.846 0 2.914-1.12 3.357-1.772l-1.373-.908c-.458.666-1.084 1.105-1.985 1.105-.9 0-1.541-.409-1.953-1.212l5.388-2.21-.184-.456Zm-42.928-1.317v1.696h4.09c-.122.954-.442 1.652-.93 2.136-.596.59-1.527 1.242-3.16 1.242-2.519 0-4.487-2.014-4.487-4.514 0-2.5 1.968-4.513 4.487-4.513 1.358 0 2.35.53 3.084 1.211l1.205-1.196c-1.023-.97-2.381-1.712-4.289-1.712-3.45 0-6.35 2.787-6.35 6.21s2.9 6.21 6.35 6.21c1.862 0 3.266-.606 4.365-1.741 1.13-1.121 1.48-2.697 1.48-3.97 0-.393-.029-.756-.09-1.059h-5.755Zm10.497 5.195c-1.222 0-2.275-1-2.275-2.423 0-1.44 1.053-2.424 2.275-2.424 1.22 0 2.275.984 2.275 2.424 0 1.424-1.055 2.423-2.275 2.423Zm0-6.423c-2.229 0-4.046 1.682-4.046 4 0 2.302 1.817 3.998 4.046 3.998s4.045-1.696 4.045-3.998c0-2.318-1.816-4-4.045-4Zm8.824 6.423c-1.221 0-2.274-1-2.274-2.423 0-1.44 1.053-2.424 2.274-2.424 1.22 0 2.274.984 2.274 2.424 0 1.424-1.053 2.423-2.274 2.423Zm0-6.423c-2.229 0-4.045 1.682-4.045 4 0 2.302 1.816 3.998 4.045 3.998 2.228 0 4.045-1.696 4.045-3.998 0-2.318-1.817-4-4.045-4Z'
        />
        <path
          fill='#5AC8F2'
          d='M10.857 8.236c-.275.289-.438.738-.438 1.32v20.777c0 .58.163 1.03.438 1.32l.07.067 11.728-11.64v-.273L10.927 8.167l-.07.07Z'
        />
      </g>
      <mask
        id='c'
        width='11'
        height='9'
        x='22'
        y='15'
        maskUnits='userSpaceOnUse'
        style={{ maskType: 'luminance' }}
      >
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M22.655 19.806v.275l3.91 3.881.089-.05 4.632-2.612c1.322-.746 1.322-1.966 0-2.712l-4.632-2.613-.089-.05-3.91 3.88Z'
          clipRule='evenodd'
        />
      </mask>
      <g mask='url(#c)'>
        <path
          fill='url(#d)'
          fillRule='evenodd'
          d='M22.655 19.806v.275l3.91 3.881.089-.05 4.632-2.612c1.322-.746 1.322-1.966 0-2.712l-4.632-2.613-.089-.05-3.91 3.88Z'
          clipRule='evenodd'
        />
      </g>
      <mask
        id='e'
        width='17'
        height='14'
        x='10'
        y='19'
        maskUnits='userSpaceOnUse'
        style={{ maskType: 'luminance' }}
      >
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M10.857 31.652c.436.459 1.156.514 1.968.057l13.829-7.797-3.999-3.968-11.798 11.708Z'
          clipRule='evenodd'
        />
      </mask>
      <g mask='url(#e)'>
        <path
          fill='url(#f)'
          fillRule='evenodd'
          d='M10.857 31.652c.436.459 1.156.514 1.968.057l13.829-7.797-3.999-3.968-11.798 11.708Z'
          clipRule='evenodd'
        />
      </g>
      <mask
        id='g'
        width='17'
        height='13'
        x='10'
        y='7'
        maskUnits='userSpaceOnUse'
        style={{ maskType: 'luminance' }}
      >
        <path
          fill='#fff'
          fillRule='evenodd'
          d='m10.857 8.236 11.798 11.707 3.999-3.968-13.83-7.796c-.38-.215-.74-.316-1.06-.316a1.211 1.211 0 0 0-.907.373Z'
          clipRule='evenodd'
        />
      </mask>
      <g mask='url(#g)'>
        <path
          fill='url(#h)'
          fillRule='evenodd'
          d='m10.857 8.236 11.798 11.707 3.999-3.968-13.83-7.796c-.38-.215-.74-.316-1.06-.316a1.211 1.211 0 0 0-.907.373Z'
          clipRule='evenodd'
        />
      </g>
      <path
        fill='#FEFEFE'
        fillRule='evenodd'
        d='M44.408 8.9a2.031 2.031 0 0 0-1.343-.513c-1.165 0-2.063.955-2.063 2.127 0 1.172.898 2.119 2.063 2.119 1.004 0 1.732-.578 1.78-1.493H43.26v-.65h2.442c0 1.943-1.043 2.858-2.637 2.858-1.586 0-2.815-1.268-2.815-2.834 0-1.573 1.229-2.842 2.815-2.842.736 0 1.4.281 1.885.73l-.542.498ZM50.032 7.736v.7h-2.55V10.2h2.225v.699h-2.224v1.67h2.63v.698H46.73V7.736h3.3ZM54.91 7.736v.707h-1.69v4.825h-.76V8.443h-1.692v-.707h4.142ZM57.768 13.268h.752V7.736h-.752v5.532ZM63.649 7.736v.707h-1.69v4.825h-.761V8.443h-1.692v-.707h4.143ZM68.957 12.625c1.173 0 2.071-.939 2.071-2.11 0-1.173-.898-2.12-2.07-2.12-1.166 0-2.064.947-2.064 2.12 0 1.171.898 2.11 2.063 2.11Zm0-4.952a2.815 2.815 0 0 1 2.831 2.841 2.813 2.813 0 0 1-2.83 2.834c-1.586 0-2.817-1.268-2.817-2.834 0-1.574 1.23-2.841 2.816-2.841ZM76.239 13.268l-2.54-4.166v4.166h-.753V7.736h.745l2.516 4.135V7.736h.752v5.532h-.72Z'
        clipRule='evenodd'
      />
      <defs>
        <linearGradient
          id='d'
          x1='30.426'
          x2='7.519'
          y1='10.379'
          y2='10.379'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FEFEFE' />
          <stop offset='1' stopColor='#F8F8F8' />
        </linearGradient>
        <linearGradient
          id='f'
          x1='10.504'
          x2='-4.405'
          y1='13.861'
          y2='39.152'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#EE4547' />
          <stop offset='1' stopColor='#C7186D' />
        </linearGradient>
        <linearGradient
          id='h'
          x1='-8.573'
          x2='3.597'
          y1='3.039'
          y2='23.69'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#73C169' />
          <stop offset='1' stopColor='#289E6F' />
        </linearGradient>
      </defs>
    </svg>
  );
}