<template>
  <div class="row header">
    <!--====Start Navigation=====-->
    <div class="navbar navbar-expand-lg">
      <h3><a class="navbar-brand pl-5 lef white" :href="hom">Terminpro</a></h3>
      <button
        class="navbar-toggler silver"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-control="nanbarNav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <i class="fa fa-list"></i>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav navbar-left col-md-3">
          <form class="form-inline">
            <!--  <i class="fa fa-search"></i> -->
            <input
              class="form-control mr-sm-2"
              type="text"
              name="search"
              placeholder="Search "
              aria-label="Search"
            />
          </form>
        </ul>
        <ul class="nav navbar-nav navbar-right col-md-9">
          <li class="nav-item px-3 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $t("lan") }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a
                class="dropdown-item"
                @click.prevent="change_language('en')"
                href="#"
                >English</a
              >
              <a
                class="dropdown-item"
                @click.prevent="change_language('de')"
                href="#"
                >Deutsch</a
              >
            </div>
          </li>
          <li class="nav-item px-3">
            <router-link to="/contact">
              <a class="nav-link">{{ $t("con") }}</a>
            </router-link>
          </li>
          <li class="nav-item px-3" v-if="type === 'owner'">
            <router-link to="/#">
              <a @click.prevent="trains()" class="nav-link">{{ $t("ins") }}</a>
            </router-link>
          </li>
          <li class="nav-item px-3" v-if="type === 'user'">
            <router-link to="/about">
              <a class="nav-link">About</a>
            </router-link>
          </li>
          <li class="nav-item px-3" v-if="!token">
            <router-link class="left" to="/login" replace>
              <a class="nav-link">Signin</a>
            </router-link>
          </li>
          <li class="but" v-if="token">
            <div class="dropdown">
              <div
                v-if="!img"
                class="butim btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="margin-top: 0px;"
              >
                <img
                  src="../assets/user.png"
                  width="53"
                  height="39"
                  class="butim btn btn-secondary dropdown-toggle"
                  type="button"
                />
              </div>
              <div
                v-if="img"
                class="butim btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="margin-top: 0px;"
              >
                <img
                  :src="'data:image/jpg;base64,' + img"
                  width="53"
                  height="39"
                  class="butim btn btn-secondary dropdown-toggle"
                  type="button"
                />
              </div>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" :href="pers">
                  Personal File <i class="fa fa-user"></i
                ></a>
                <a class="dropdown-item" id="logout" @click.prevent="logout"
                  >Lgout <i class="fa fa-sign-out"></i>
                </a>
                <!--<a class="dropdown-item" id="adm">page Manager<i class="fa fa-sign-out"></i> </a>-->
              </div>
            </div>
          </li>
          <li class="nav-item px-3" v-if="token">
            <label
              class="nav-link hello"
              style="color:rgb(216, 215, 215); !important"
            >
              <span id="username"> {{ username }}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <!--====End Navigation=====-->
  </div>
</template>
<script>
import VueCookies from "vue-cookies";
import { getuser } from "../graph/Quries.js";
export default {
  name: "AppHeader",
  components: {
    //  Dropdown,
  },
  data() {
    return {
      hom: "/#",
      pers: "/user",
      token: VueCookies.get("session").token,
      username: VueCookies.get("session").username,
      type: VueCookies.get("session").type,
      insid: VueCookies.get("insid"),
      userid: VueCookies.get("session").userid,
      img: "",
    };
  },
  methods: {
    logout() {
      VueCookies.remove("session");
      VueCookies.set("session", { username: "", token: null });
      this.$router.push("/login");
    },
    trains() {
      console.log(this.insid);
      VueCookies.remove(this.insid);
      this.insid = null;
      VueCookies.set("insid", null);
      console.log("+++=");
      console.log(this.insid);
      this.$router.push("/addservic");
    },
    change_language(lang) {
      this.$i18n.locale = lang;
    },
  },
  async mounted() {
    if (this.token != null) {
      try {
        console.log("****=================???????");
        var resultu = await getuser(this.userid);
        this.user = resultu.data.data;
        console.log(this.user);
        this.img = this.user.photo;
        console.log("****");
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    } else {
      this.img = null;
      console.log("error");
    }
  },
};
</script>
