"use strict";

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../modules/home";
//import Design from "../modules/design";
import General from "../modules/design/general";
import Frontpage from "../modules/design/frontpage";
import Filemanager from "../modules/design/filemanager";
import Progress from "../modules/design/progress";
import Dwgcompare from "../modules/design/dwgcompare";
import Allelement from "../modules/all-element";
import Counter from "../modules/counter";
import Devices from "../modules/devices";
import Posts from "../modules/posts";
import Profile from "../modules/profile";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "hash",
	routes: [
		{ path: "/", component: Home },
		//{ path: "/design", component: Design },
		{ path: "/design/general", component: General },
		{ path: "/design/frontpage", component: Frontpage },
		{ path: "/design/progress", component: Progress },
		{ path: "/design/filemanager", component: Filemanager },
		{ path: "/design/dwgcompare", component: Dwgcompare },
		{ path: "/devices", component: Devices },
		{ path: "/posts", component: Posts },
		{ path: "/counter", component: Counter },	
		{ path: "/profile", component: Profile }
		// { path: "/users", component: User, meta: { needRole: "admin" } },
		//{ path: "*", component: NotFound }
	]
});