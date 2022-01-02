<template>
  <div class="bookser">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2 style="color: #fff;">
            <a
              style="
                text-align: left;
                color: #fff;
                float: left;
                margin-top: -90px !important;
              "
              :href="detal"
              ><i class="fa fa-arrow-left" aria-hidden="true"></i
            ></a>
          </h2>
          <div class="bser" v-if="i === 1">
            <div class="box">
              <h3>Select Services</h3>
            </div>
            <!--<hr />-->
            <div class="box">
              <div class="row se" v-for="ser in services" v-bind:key="ser._id">
                <div class="col-md-2">
                  <!--<i class="fa fa-circle-o"></i>-->
                  <input
                    v-on:input="checked = serv(ser)"
                    :value="ser._id"
                    :checked="ids.indexOf(ser._id) > -1"
                    type="checkbox"
                  />
                  <!---->
                </div>
                <div class="col-md-8">
                  <h4>{{ ser.name }}</h4>
                  <p class="ock">{{ ser.length }} Hour</p>
                  <p>{{ ser.description }}</p>
                  <!--<hr />-->
                </div>
                <div class="col-md-2">
                  <p class="pric">{{ ser.price }} $</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sta" v-if="i === 2">
            <!--<bookstaff />-->
            <div class="bokstaf">
              <!---	<booktime v-if="i === 3" />-->
              <div class="container">
                <div class="box">
                  <h3><i class="fa fa-user"></i> Select Staff</h3>
                </div>
                <!--<hr />-->
                <div class="box">
                  <div
                    class="row stf"
                    v-for="emp in employe"
                    v-bind:key="emp._id"
                  >
                    <div class="col-md-2">
                      <i class="fa fa-user-o"></i>
                    </div>
                    <div
                      @click.prevent="
                        boktime(emp._id);
                        i++;
                      "
                      class="col-md-8"
                    >
                      <h4>{{ emp.firstName }} {{ emp.lastName }}</h4>
                      <!--<hr />-->
                    </div>
                    <div class="col-md-2">
                      <!--<i class="fa fa-arrow-right"></i>-->
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ta" v-if="i === 3">
            <div class="boktim">
              <div class="container">
                <div class="box">
                  <h3>Select Date</h3>
                  <div class="dat">
                    <input
                      v-model="histo"
                      dir="ltr"
                      lang="en"
                      type="date"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
                <div class="box">
                  <h3>Select Time</h3>
                  <div class="row ti" v-for="tim in time" v-bind:key="tim">
                    <!--:class="[stat === true ? 'activ' : 'ti']"-->
                    <div class="col-md-2">
                      <i class="fa fa-calendar-check-o"></i>
                    </div>
                    <div @click.prevent="bokdate(tim)" class="col-md-8">
                      <p :style="{ color: color }">{{ tim }}</p>
                      <!--<hr />-->
                    </div>
                    <div class="col-md-2">
                      <!--, time[index + 1]  v-for="(tim, index) <i class="fa fa-arrow-right"></i>-->
                      <i class="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---:items="i"-->
          </div>
        </div>
        <div class="col-md-4">
          <div class="bins" v-for="int in insit" v-bind:key="int.id">
            <div class="ret">
              <a v-if="i > 1" @click.prevent="i--"
                ><i class="fa fa-arrow-right"></i
              ></a>
              Step {{ i }} from 4
            </div>
            <div class="img">
              <img :src="'data:image/jpg;base64,' + int.photo" />
            </div>
            <h4>{{ int.name }}</h4>
            <h6>
              <span
                >{{ int.address[0].city }} , {{ int.address[0].country }}</span
              >
            </h6>
            <hr />
            <div class="row bo" v-for="st in stack" v-bind:key="st.id">
              <div class="col-md-8">
                <p class="bold">{{ st.name }}</p>
                <p>{{ st.length }} h</p>
                <!--<hr />-->
              </div>
              <div class="col-md-4">
                <p>{{ st.price }} $</p>
              </div>
            </div>
            <br />
            <h3>Time:{{ dat }}</h3>
            <hr />
            <h3>Total:{{ total }}</h3>
            <div class="red">
              {{ error }}
            </div>
            <div class="gree" v-if="success">
              {{ success }}
            </div>
            <div v-if="total != null">
              <button v-if="i < 2" @click.prevent="i++" class="bokk">
                Book Now
              </button>
              <button v-if="i > 1" @click.prevent="addapoinment" class="bokk">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import { getser } from "../graph/Quries.js";
import { getinsid } from "../graph/Quries.js";
import { getemp } from "../graph/Quries.js";
import { getemptime } from "../graph/Quries.js";
import { addapoinment } from "../graph/Quries.js";
import { adpayment } from "../graph/Quries.js";
import VueCookies from "vue-cookies";
export default {
  name: "bookser",
  components: {
    //Bookstaff,
    //Booktime,
  },
  data() {
    return {
      stat: false,
      token: VueCookies.get("session").token,
      insid: VueCookies.get("insid"),
      uid: VueCookies.get("session").userid,
      services: "",
      servc: "",
      insit: "",
      length: "",
      nam: "",
      tim: "",
      pri: "",
      total: null,
      i: 1,
      stack: [],
      ids: [],
      employe: "",
      eid: "",
      time: "",
      d: 0,
      dat: "",
      //endt: '',
      histo: 0,
      error: "",
      success: "",
      color: "gray",
      detal: "/venusdetail",
    };
  },
  async mounted() {
    try {
      console.log("****");
      console.log(this.insid);
      var result11 = await getser(this.insid);
      this.services = result11.data.data;
      console.log(this.services);
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
    try {
      console.log("****");
      var result7 = await getinsid(this.insid);
      this.insit = result7.data;
      console.log(this.insit);
      console.log(this.insit.data.slider);
      this.length = this.insit.data.slider.length;
      console.log(this.length);
      var i = 0;
      while (i <= this.length) {
        this.j = i;
        i++;
      }
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
    try {
      console.log("****");
      console.log(this.insid);
      var result10 = await getemp(this.insid);
      this.employe = result10.data.data;
      console.log(this.employe);
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async serv(ser) {
      if (this.ids.indexOf(ser._id) === -1) {
        /* var m=0;
                while(this.stack[m]._id !== ser.id){*/
        this.ids.push(ser._id);
        this.stack.push(ser);
        console.log(this.stack);

        var inex = this.ids.indexOf(ser._id);
        this.total = this.total + this.stack[inex].price;
        //m++;}
      } else {
        var index = this.ids.indexOf(ser._id);
        this.total = this.total - this.stack[index].price;
        this.stack.splice(index, 1);
        this.ids.splice(index, 1);
      }
    },
    async checkid(id) {
      if (this.ids.indexOf(id) === -1) {
        return false;
      } else {
        return true;
      }
    },
    async boktime(eid) {
      console.log(eid);
      //VueCookies.set('eid', eid);
      this.eid = eid;
      console.log(this.eid);
      try {
        console.log("****");
        console.log(this.eid);
        var result188 = await getemptime(this.eid);
        this.time = result188.data;
        console.log(this.time);
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
      //this.$router.push('/categorydetail');
    },
    async addapoinment() {
      //this.eid = VueCookies.get('eid');
      console.log(this.insid);
      console.log(this.ids);
      console.log(this.uid);
      console.log(this.eid);
      console.log(this.dat);
      //console.log(this.endt);
      console.log(this.histo.replaceAll("-", ""));
      try {
        var resultap = await addapoinment(
          this.token,
          this.insid,
          this.ids,
          this.uid,
          this.eid,
          this.dat,
          //this.endt,
          this.histo.replaceAll("-", "")
        );
        //String(this.endt),
        console.log(this.token);
        var status = resultap[0];
        console.log(status);
        var resultr = resultap[1];
        if (status === 401) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;
          console.log("-----error-------");
        } else if (status === 422) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;
          console.log("-----error-------");
        } else if (status === 409) {
          console.log("-----error-------");
          console.log(resultr.msg);
          this.error = resultr.msg;
          console.log("-----error-------");
        } else {
          console.log("==================");
          //this.$router.push('/login');
          console.log(resultap);
          this.success = "Sucess";
          console.log("success");
          try {
            var resultp = await adpayment(
              this.token,
              this.uid,
              this.ids,
              this.insid
            );
            console.log(this.token);
            var status2 = resultp[0];
            console.log(status2);
            var resultrr = resultp[1];
            if (status2 === 401) {
              console.log("-----error-------");
              console.log(resultrr.msg);
              this.error = resultrr.msg;
              console.log("-----error-------");
            } else if (status2 === 422) {
              console.log("-----error-------");
              console.log(resultrr.msg);
              this.error = resultrr.msg;
              console.log("-----error-------");
            } else if (status2 === 409) {
              console.log("-----error-------");
              console.log(resultrr.msg);
              this.error = resultrr.msg;

              console.log("-----error-------");
            } else if (status2 === 404) {
              console.log("-----error-------");
              console.log(resultrr.msg);
              this.error = resultrr.msg;

              console.log("-----error-------");
            } else if (status2 === 400) {
              console.log("-----error-------");
              console.log(resultrr.msg);
              this.error = resultrr.msg;
              console.log("-----error-------");
            } else {
              console.log("==================");
              //this.$router.push('/login');
              console.log(resultp);
              console.log(resultp.data.red_url);
              //this.$router.push(resultch.data.redirect_url);
              window.open(resultp.data.red_url, "_parent");
            }
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async bokdate(dat) {
      this.dat = dat;
      //this.endt = endt;
      console.log(this.dat);
      //console.log(this.endt);
      //this.stat = true;
      this.color = "var(--second-color)";
      //console.log(dat);
      //VueCookies.set('dat', dat);
      //console.log(endt);
      //VueCookies.set('endt', endt);
      //this.$router.push('/categorydetail');
    },
  },
};
</script>
