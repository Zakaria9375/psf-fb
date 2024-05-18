<template>
  <div class="story">
    <div class="me">
      <h4>About me</h4>
      <p>
        I'm Zakaria, but you can call me Zica. Originally from Egypt. I'm more
        of a traveler than a stationary soul. Currently, residing in Riga,
        Latvia, pursuing my master degree in Computer Science.
      </p>
      <div class="linksContainer">
        <h4>Find me at</h4>
        <ul>
          <li>
            <a
                href="https://www.linkedin.com/in/zakaria-ali-java/"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin Profile"
            >
              <i class="fa-brands fa-linkedin"></i>
<!--              <span>Linkedin</span>-->
            </a>
          </li>
          <li>
            <a
                href="https://github.com/Zakaria9375"
                target="_blank"
                rel="noopener noreferrer"
                title="Github Profile"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
                href="https://www.frontendmentor.io/profile/Zakaria9375"
                target="_blank"
                rel="noopener noreferrer"
                title="Frontend Mentor Profile"
            >
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" >
                  <path fill="#FFF" class="svg-clr"
                        d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z" transform="scale(1.25)"/>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
                href="https://drive.google.com/file/d/1S8lkNM5v2oyNBNV0_GFlL9jGbVrWzboM/view"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
            >
              <i class="fa-solid fa-file-pdf"></i>
            </a>
          </li>
          <li>
            <a
                href="https://hub.docker.com/u/zakaria9375"
                target="_blank"
                rel="noopener noreferrer"
                title="Docker hub Profile"
            >
              <i class="fa-brands fa-docker"></i>
            </a>
          </li>
          <li>
            <a
                href="https://app.codesignal.com/profile/zakaria9375"
                target="_blank"
                rel="noopener noreferrer"
                title="Codesignal Profile"
            >
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                     viewBox="0 0 24 24"><path fill="white" class="svg-clr" d="M24 1.212L13.012 2.787L12 5.62l-1.01-2.833L0 1.212L3.672 11.45l4.512.646l3.815 10.691l3.816-10.691l4.512-.646zm-3.625 4.406l-4.52.648l-.73 2.044l4.517-.647l-.734 2.047l-4.514.647L12 17.064l-2.393-6.707l-4.514-.647l-.735-2.047l4.518.647l-.73-2.044l-4.52-.648l-.735-2.047l6.676.956L12 11.345l2.434-6.818l6.676-.956Z"/></svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="photo">
      <img src="/images/zico.jpg" alt="my profile photo" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.story {
  max-width: 1060px;
  width: 100%;
  @include more($smS) {
    @include flexoo(row, wrap, space-between, center);
  }
  @include less($smS) {
    @include flexoo(column, wrap, center, center);
  }
  padding: 20px;
  margin-bottom: 10px;
  background: $about;

  .me {
    @include more($smS) {
      width: 60%;
    }
    @include less($smS) {
      margin-top: 24px;
      order: 2;
    }
    h4 {
      @include fontoo(1.4rem, 600, $wclr);
      text-transform: uppercase;
      padding: 0 20px 10px;
      opacity: 0.5;
    }
    p {
      @include fontoo(1.25rem, 500, $wclr);
      line-height: 1.8;
      opacity: 0.9;
      padding-bottom: 1.25rem;
    }
    .linksContainer {
      ul {
        @include flexoo(row, wrap, space-evenly, center);
        @include  less($smS){
          gap: 8px;
        }
        li {
          border-radius: 8px;
          a {
            @include flexoo(row, nowrap, flex-start, flex-start);
            font-size: 1.5rem;
            color: #fff;
            padding: 8px;
            i {
              //margin-right: 12px;
              font-size: 1.9rem;
            }
            .icon, img {
              //margin-right: 12px;
              width: 28px;
              height: 28px;
            }
          }
          &:hover {
            i {
              color: $rclr;
              scale: 1.05;
            }
            .icon {
              scale: 1.05;

              .svg-clr {
                fill: rgb(255, 133, 106);
              }
            }
          }
        }
      }
    }

  }
  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    @include more($smS) {
      flex-basis: 35%;
      max-width: 300px;
    }
    @include less($smS) {
      width: min(400px, 100%);
      order: 1;
    }
    img {
      max-width: 280px;
      max-height: 280px;
      width: 100%;
      aspect-ratio: 1;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      filter: grayscale(20%) brightness(90%);
    }
  }

}

</style>
<script setup lang="ts">
</script>