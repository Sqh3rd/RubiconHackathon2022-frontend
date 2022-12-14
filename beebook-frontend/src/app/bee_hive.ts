import { Time } from "@angular/common";
import { GoogleMap } from "@angular/google-maps";

export interface bee_hive {
    id: number;
    name: string;
    user_owner: string,
    loc: google.maps.LatLngLiteral,
    bee_type: string,
    sickness: string,
    small_radius: 5,
    big_radius: 10
}
export interface fav_hive_rel {
    id: number,
    hive_id: number,
    user_owner: string
}
export interface post {
    id: number,
    date: Date,
    content: string,
    notes: string
}
export interface hive_post_rel {
    id: number,
    post_id: number,
    hive_id: number
}

export const full_name: string = "Max Mustermann";

export const bee_hives: bee_hive[] = [
    { id: 0, name: "Bee_Hive #1", user_owner: "Max Mustermann", loc: {lat: 48.12080657100986, lng: 16.074071051363302}, bee_type: "Östliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 1, name: "Bee_Hive #2", user_owner: "Max Mustermann", loc: {lat: 48.31902726273664, lng: 16.22943909301113}, bee_type: "Kliffhonigbiene ", sickness: "", small_radius: 5, big_radius: 10},
    { id: 2, name: "Bee_Hive #3", user_owner: "Thorsten Brandt", loc: {lat: 48.11868413545895, lng: 16.42068436271897}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 3, name: "Bee_Hive #4", user_owner: "Jennifer Sankt", loc: {lat: 48.05294303501304, lng: 16.441283728112284}, bee_type: "Östliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 4, name: "Bee_Hive #5", user_owner: "Kevin Foerster", loc: {lat: 48.09340076752928, lng: 16.23338730471151}, bee_type: "Asiatische Rote Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 5, name: "Bee_Hive #6", user_owner: "Marcel Eichel", loc: {lat: 48.39019655404771, lng: 16.23205475488387}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 7, name: "Bee_Hive #8", user_owner: "Torsten Bauer", loc: {lat: 47.838353052239134, lng: 16.321199346853806}, bee_type: "Zwergbuschbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 8, name: "Bee_Hive #9", user_owner: "David Nagel", loc: {lat: 48.04029666259348, lng: 16.155874945265878}, bee_type: "Kliffhonigbiene ", sickness: "", small_radius: 5, big_radius: 10},
    { id: 9, name: "Bee_Hive #10", user_owner: "Dirk Braun", loc: {lat: 48.2407539719454, lng: 16.021027685475528}, bee_type: "Östliche Honigbiene", sickness: "Faulbrut", small_radius: 5, big_radius: 10},
    { id: 10, name: "Bee_Hive #11", user_owner: "Juliane Maur", loc: {lat: 48.164670129465236, lng: 16.128065801994182}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 11, name: "Bee_Hive # 12", user_owner: "Wolfgang Dreher", loc: {lat: 48.456654729378396, lng: 16.3630847230807}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10}
]

export const fav_bee_rels: fav_hive_rel[] = [
    { id: 0, hive_id: 5, user_owner: "Max Mustermann" },
    { id: 1, hive_id: 2, user_owner: "Max Mustermann" }
]

export const posts: post[] = [
    { id: 0, date: new Date(2022, 12, 19, 13, 30, 57), content: "Text", notes:"Notiz"}
]

export const phr: hive_post_rel[] = [
    { id: 0, post_id: 0, hive_id: 1}
]