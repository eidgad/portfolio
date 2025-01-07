import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Add icons you need

library.add(faUserSecret, faHome, faEnvelope);
Vue.component("font-awesome-icon", FontAwesomeIcon);
