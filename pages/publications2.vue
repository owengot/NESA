<template>
  <div class="container">
    <div class="row">

       <input v-model="peopleSearchString" placeholder="Search people" />
        <no-ssr>
  <isotope :options='options' :list="filteredPeople" id="root_isotope">
    <div v-for="person in filteredPeople" :key="person.topic">
      <p>{{person.topic}}</p>
    </div>
  </isotope>
   </no-ssr>

      <div class="col-md-4 py-5">
        <ul class="list-unstyled mb-0">
          <li
            class="mb-3"
            v-for="(val, key) in option.getFilterData"
            :key="key"
          >
            <div
              class="cursore-pointer"
              :class="[key === filterOption ? 'text-success' : 'text-white']"
              @click="filter(key)"
            >{{ key }}</div>
          </li>
        </ul>
      </div>
      <div class="col-md-8 d-flex">
        <div class="m-auto w-100">
          <no-ssr>
            <isotope
              ref="projects"
              :options="option"
              :list="projects"
            >
              <div
                class="text-white thumbnail"
                v-for="(item, index) in projects"
                :key="index"
              >
                <div class="cursore-pointer d-block pos-r p-1"><img class="w-100" />
                  <div class="pin pin-xy d-flex text-white thumbnail-overlay">
                    <div class="m-auto fs-16 text-center">{{ item.title }}</div>
                  </div>
                </div>
              </div>
            </isotope>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionProjects",
  data() {
    return {
      filterOption: "Show All",
      peopleSearchString: "",

      option: {
        getFilterData: {
          "Show All"() {
            return true;
          },
          "Production Housing"(itemElem) {
            return itemElem.categories
              .map(x => x === "Production Housing")
              .includes(true);
          },
          "Remodel Design"(itemElem) {
            return itemElem.categories
              .map(x => x === "Remodel Design")
              .includes(true);
          },
          "Commercial Buildings"(itemElem) {
            return itemElem.categories
              .map(x => x === "Commercial Buildings")
              .includes(true);
          },
          "Land Planning"(itemElem) {
            return itemElem.categories
              .map(x => x === "Land Planning")
              .includes(true);
          }
        }
      },
      projects: [{ id: '1', topic: 'Jhon Snow', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '2', topic: 'Histomorphometric study of placental villi vascular volume in toxemia and diabetes', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '3', topic: 'Jaime Lanister', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '4', topic: 'Tyron Lanister', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'}]
    };
  },

  computed: {
     filteredPeople:function()
    {
    	 var self=this;
       return this.projects.filter(function(cust){return cust.topic.toLowerCase().indexOf(self.peopleSearchString.toLowerCase())>=0;});
       //return this.customers;
    }
  },

  methods: {
    filter(key) {
      if (this.filterOption !== key) {
        this.$refs.projects.filter(key);
        this.filterOption = key;
      }
    }
  }
};
</script>