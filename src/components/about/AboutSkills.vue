<script setup>
import { useFirestore, useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { computed } from "vue";
import IconFrontend from "@/components/header/IconFrontend.vue";
const db = useFirestore();
const skills = useCollection(collection(db, "skills"));
const credits = useCollection(collection(db, "credits"));
const activeSkills = computed(() => {
  return skills.value.filter((skill) => skill.active === true);
});
</script>

<template>
  <div class="skills">
    <h2>Most used technologies</h2>
    <div class="skillContainer">
				<span v-for="skill in activeSkills" :key="skill.idS" class="skill">
					<span class="skilllogo">
						<img :alt="skill.name" class="logo" :src="skill.source" />
					</span>
					<span class="svg">{{ skill.name }}</span>
				</span>
    </div>
  </div>
  <div class="accomplished">
    <h4>Credentials</h4>
    <div class="credits">
      <div v-for="credit in credits" class="credit">
        <p>
          <a :href="credit.link" target="_blank" rel="noopener noreferrer">
            {{ credit.title }}

            <i class="fa-solid fa-paperclip"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
  padding: 16px;
  h2 {
    text-align: center;
    @include fontoo(1.8rem, 600, $wclr);
    margin-bottom: 1.8rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    opacity: 0.5;
  }
  .skillContainer {
    @include flexoo(row, wrap, center, center);
    gap: 1rem;
    .skill {
      .skilllogo {
        .logo {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 10px;
          margin-left: 10px;
        }
      }
      .svg {
        @include fontoo(1.6rem, normal, $wclr);
        opacity: 0.95;
      }
    }
  }
}
.accomplished {
  padding: 16px;
  max-width: 1060px;
  background: $about;
  width: 100%;
  margin-top: 10px;
  h4 {
    @include fontoo(1.4rem, 600, $wclr);
    text-transform: uppercase;
    padding: 0 20px 16px;
    opacity: 0.5;
  }
  .credits {
    @include flexoo(column, wrap, flex-start, flex-start);

    .credit {
      p {
        @include fontoo(1.25rem, 500, $wclr);
        line-height: 1.8;
        opacity: 0.9;
        a {
          text-decoration: none;
          cursor: pointer;
          @include fontoo(1.4rem, normal, #ddd);
          i {
            margin: 8px;
            font-size: 1.4rem;
            color: $gclr;
          }
          &:hover {
            i {
              transform: rotate(25deg);
            }
            color: #fff;
          }
        }
      }
    }
  }
}
</style>