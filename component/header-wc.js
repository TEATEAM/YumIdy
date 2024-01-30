class Headercomponent extends HTMLElement {
    constructor() {
      super();
      this.#render();
    }
  
  
    #render() {
      this.innerHTML = `
      <style>
      header{
        width: 100%;
        height:5.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: var( --font-sizeTom);
        padding: 1.1rem;
        background: rgba(15, 15, 15, 0.10);
        box-shadow: 0px 4px 4px 0px rgba(240, 251, 255, 0.20);      
        & .logo{
          
        }
        & .nevtreh{
          width: 8.125rem;
          height: 3.125rem;
          background: none;
          font-size: var(--font-sizeSmall);
          color: var(--color-text);
          border-radius: 1.25rem;
          margin-right: var(--border-radius);
          border:var(--border);
        }
        & .nevtreh:hover{
          color: var(--color-text);
          background: var(--color-accent);
          cursor: pointer;
          transition: .5s;
        }
      }
      </style>
      <header>
        <a class="logo"  href="index.html" >
        <svg width="157" height="55" viewBox="0 0 157 55" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect y="11.5" width="28" height="27" fill="url(#pattern0)"/>
          <g filter="url(#filter0_d_595_1255)">
          <path d="M46.756 13.692C47.308 13.692 47.8 13.908 48.232 14.34C48.688 14.748 48.916 15.276 48.916 15.924C48.916 16.14 48.88 16.368 48.808 16.608C48.76 16.824 48.664 17.04 48.52 17.256L40.348 28.956L40.996 26.472V36.804C40.996 37.428 40.78 37.956 40.348 38.388C39.94 38.796 39.46 39 38.908 39C38.308 39 37.792 38.796 37.36 38.388C36.952 37.956 36.748 37.428 36.748 36.804V26.76L37.036 27.912L29.26 17.58C29.02 17.268 28.852 16.968 28.756 16.68C28.66 16.392 28.612 16.128 28.612 15.888C28.612 15.24 28.864 14.712 29.368 14.304C29.872 13.896 30.388 13.692 30.916 13.692C31.588 13.692 32.176 14.028 32.68 14.7L39.592 24.24L38.584 24.096L44.956 14.772C45.46 14.052 46.06 13.692 46.756 13.692ZM65.3742 19.74C65.9982 19.74 66.5142 19.956 66.9222 20.388C67.3302 20.796 67.5342 21.312 67.5342 21.936V31.08C67.5342 33.624 66.8262 35.64 65.4102 37.128C63.9942 38.616 61.9542 39.36 59.2902 39.36C56.6262 39.36 54.5862 38.616 53.1702 37.128C51.7782 35.64 51.0822 33.624 51.0822 31.08V21.936C51.0822 21.312 51.2862 20.796 51.6942 20.388C52.1022 19.956 52.6182 19.74 53.2422 19.74C53.8662 19.74 54.3822 19.956 54.7902 20.388C55.1982 20.796 55.4022 21.312 55.4022 21.936V31.08C55.4022 32.544 55.7262 33.636 56.3742 34.356C57.0222 35.052 57.9942 35.4 59.2902 35.4C60.6102 35.4 61.5942 35.052 62.2422 34.356C62.8902 33.636 63.2142 32.544 63.2142 31.08V21.936C63.2142 21.312 63.4182 20.796 63.8262 20.388C64.2342 19.956 64.7502 19.74 65.3742 19.74ZM82.3271 19.38C84.2471 19.38 85.6631 19.848 86.5751 20.784C87.4871 21.696 88.0871 22.884 88.3751 24.348L87.7631 24.024L88.0511 23.448C88.3391 22.896 88.7831 22.308 89.3831 21.684C89.9831 21.036 90.7031 20.496 91.5431 20.064C92.4071 19.608 93.3671 19.38 94.4231 19.38C96.1511 19.38 97.4591 19.752 98.3471 20.496C99.2591 21.24 99.8831 22.236 100.219 23.484C100.555 24.708 100.723 26.076 100.723 27.588V36.804C100.723 37.428 100.519 37.956 100.111 38.388C99.7031 38.796 99.1871 39 98.5631 39C97.9391 39 97.4231 38.796 97.0151 38.388C96.6071 37.956 96.4031 37.428 96.4031 36.804V27.588C96.4031 26.796 96.3071 26.088 96.1151 25.464C95.9231 24.816 95.5751 24.3 95.0711 23.916C94.5671 23.532 93.8471 23.34 92.9111 23.34C91.9991 23.34 91.2191 23.532 90.5711 23.916C89.9231 24.3 89.4311 24.816 89.0951 25.464C88.7831 26.088 88.6271 26.796 88.6271 27.588V36.804C88.6271 37.428 88.4231 37.956 88.0151 38.388C87.6071 38.796 87.0911 39 86.4671 39C85.8431 39 85.3271 38.796 84.9191 38.388C84.5111 37.956 84.3071 37.428 84.3071 36.804V27.588C84.3071 26.796 84.2111 26.088 84.0191 25.464C83.8271 24.816 83.4791 24.3 82.9751 23.916C82.4711 23.532 81.7511 23.34 80.8151 23.34C79.9031 23.34 79.1231 23.532 78.4751 23.916C77.8271 24.3 77.3351 24.816 76.9991 25.464C76.6871 26.088 76.5311 26.796 76.5311 27.588V36.804C76.5311 37.428 76.3271 37.956 75.9191 38.388C75.5111 38.796 74.9951 39 74.3711 39C73.7471 39 73.2311 38.796 72.8231 38.388C72.4151 37.956 72.2111 37.428 72.2111 36.804V21.936C72.2111 21.312 72.4151 20.796 72.8231 20.388C73.2311 19.956 73.7471 19.74 74.3711 19.74C74.9951 19.74 75.5111 19.956 75.9191 20.388C76.3271 20.796 76.5311 21.312 76.5311 21.936V23.484L75.9911 23.376C76.2071 22.968 76.5071 22.536 76.8911 22.08C77.2751 21.6 77.7431 21.156 78.2951 20.748C78.8471 20.34 79.4591 20.016 80.1311 19.776C80.8031 19.512 81.5351 19.38 82.3271 19.38Z" fill="#EE5151"/>
          <path d="M109.467 36.804C109.467 37.428 109.263 37.956 108.855 38.388C108.447 38.796 107.931 39 107.307 39C106.683 39 106.167 38.796 105.759 38.388C105.351 37.956 105.147 37.428 105.147 36.804V21.936C105.147 21.312 105.351 20.796 105.759 20.388C106.167 19.956 106.683 19.74 107.307 19.74C107.931 19.74 108.447 19.956 108.855 20.388C109.263 20.796 109.467 21.312 109.467 21.936V36.804ZM107.271 17.4C106.455 17.4 105.879 17.268 105.543 17.004C105.207 16.74 105.039 16.272 105.039 15.6V14.916C105.039 14.22 105.219 13.752 105.579 13.512C105.963 13.248 106.539 13.116 107.307 13.116C108.147 13.116 108.735 13.248 109.071 13.512C109.407 13.776 109.575 14.244 109.575 14.916V15.6C109.575 16.296 109.395 16.776 109.035 17.04C108.675 17.28 108.087 17.4 107.271 17.4ZM129.674 12.36C130.298 12.36 130.814 12.564 131.222 12.972C131.63 13.38 131.834 13.908 131.834 14.556V36.804C131.834 37.428 131.63 37.956 131.222 38.388C130.814 38.796 130.298 39 129.674 39C129.05 39 128.534 38.796 128.126 38.388C127.718 37.956 127.514 37.428 127.514 36.804V35.04L128.306 35.364C128.306 35.676 128.138 36.06 127.802 36.516C127.466 36.948 127.01 37.38 126.434 37.812C125.858 38.244 125.174 38.616 124.382 38.928C123.614 39.216 122.774 39.36 121.862 39.36C120.206 39.36 118.706 38.94 117.362 38.1C116.018 37.236 114.95 36.06 114.158 34.572C113.39 33.06 113.006 31.332 113.006 29.388C113.006 27.42 113.39 25.692 114.158 24.204C114.95 22.692 116.006 21.516 117.326 20.676C118.646 19.812 120.11 19.38 121.718 19.38C122.75 19.38 123.698 19.536 124.562 19.848C125.426 20.16 126.17 20.556 126.794 21.036C127.442 21.516 127.934 22.008 128.27 22.512C128.63 22.992 128.81 23.4 128.81 23.736L127.514 24.204V14.556C127.514 13.932 127.718 13.416 128.126 13.008C128.534 12.576 129.05 12.36 129.674 12.36ZM122.402 35.4C123.458 35.4 124.382 35.136 125.174 34.608C125.966 34.08 126.578 33.36 127.01 32.448C127.466 31.536 127.694 30.516 127.694 29.388C127.694 28.236 127.466 27.204 127.01 26.292C126.578 25.38 125.966 24.66 125.174 24.132C124.382 23.604 123.458 23.34 122.402 23.34C121.37 23.34 120.458 23.604 119.666 24.132C118.874 24.66 118.25 25.38 117.794 26.292C117.362 27.204 117.146 28.236 117.146 29.388C117.146 30.516 117.362 31.536 117.794 32.448C118.25 33.36 118.874 34.08 119.666 34.608C120.458 35.136 121.37 35.4 122.402 35.4ZM150.804 19.74C151.428 19.74 151.944 19.956 152.352 20.388C152.76 20.796 152.964 21.312 152.964 21.936V37.236C152.964 39.444 152.544 41.196 151.704 42.492C150.888 43.812 149.784 44.76 148.392 45.336C147 45.912 145.44 46.2 143.712 46.2C142.944 46.2 142.128 46.14 141.264 46.02C140.4 45.9 139.692 45.72 139.14 45.48C138.42 45.168 137.916 44.772 137.628 44.292C137.364 43.836 137.316 43.344 137.484 42.816C137.7 42.12 138.048 41.64 138.528 41.376C139.008 41.136 139.512 41.112 140.04 41.304C140.424 41.424 140.928 41.604 141.552 41.844C142.176 42.108 142.896 42.24 143.712 42.24C144.816 42.24 145.728 42.084 146.448 41.772C147.192 41.484 147.744 40.98 148.104 40.26C148.488 39.564 148.68 38.604 148.68 37.38V34.968L149.436 35.832C149.028 36.624 148.512 37.284 147.888 37.812C147.288 38.316 146.568 38.7 145.728 38.964C144.888 39.228 143.928 39.36 142.848 39.36C141.576 39.36 140.46 39.072 139.5 38.496C138.564 37.896 137.832 37.08 137.304 36.048C136.776 34.992 136.512 33.792 136.512 32.448V21.936C136.512 21.312 136.716 20.796 137.124 20.388C137.532 19.956 138.048 19.74 138.672 19.74C139.296 19.74 139.812 19.956 140.22 20.388C140.628 20.796 140.832 21.312 140.832 21.936V31.152C140.832 32.712 141.168 33.816 141.84 34.464C142.536 35.088 143.496 35.4 144.72 35.4C145.56 35.4 146.268 35.244 146.844 34.932C147.42 34.596 147.864 34.116 148.176 33.492C148.488 32.844 148.644 32.064 148.644 31.152V21.936C148.644 21.312 148.848 20.796 149.256 20.388C149.664 19.956 150.18 19.74 150.804 19.74Z" fill="white"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_595_1255" transform="matrix(0.03125 0 0 0.0324074 0 -0.0185185)"/>
          </pattern>
          <filter id="filter0_d_595_1255" x="24.6121" y="12.36" width="132.352" height="41.84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.767643 0 0 0 0 0.415307 0 0 0 0 0.415307 0 0 0 0.12 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_595_1255"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_595_1255" result="shape"/>
          </filter>
          <image id="image0_595_1255" width="32" height="32" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>        
        </a>
        <cart-wc></cart-wc>
        <button type="button" class="nevtreh">Нэвтрэх</button>  
      </header>
      `;
    }
  }
  
  window.customElements.define("header-component", Headercomponent);