import { GoogleMap } from "@angular/google-maps";

export interface bee_hive {
    id: number;
    name: string;
    user_owner: string,
    is_favorite: boolean,
    loc: google.maps.LatLngLiteral,
    bee_type: string,
    sickness: string,
    small_radius: 5,
    big_radius: 10
}

export let own_bee_hives: bee_hive[] = [
    { id: 0, name: "Bee_Hive #1", user_owner: "Max Mustermann", is_favorite: false, loc: {lat: 48.22080657100986, lng: 16.174071051363302}, bee_type: "Östliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 1, name: "Bee_Hive #2", user_owner: "Max Mustermann", is_favorite: false, loc: {lat: 48.21902726273664, lng: 16.32943909301113}, bee_type: "Kliffhonigbiene ", sickness: "", small_radius: 5, big_radius: 10},
]

export let other_bee_hives: bee_hive[] = [
    { id: 2, name: "Bee_Hive #3", user_owner: "Thorsten Brandt", is_favorite: false, loc: {lat: 48.21868413545895, lng: 16.32068436271897}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 3, name: "Bee_Hive #4", user_owner: "Jennifer Sankt", is_favorite: false, loc: {lat: 48.19294303501304, lng: 16.341283728112284}, bee_type: "Östliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 4, name: "Bee_Hive #5", user_owner: "Kevin Foerster", is_favorite: false, loc: {lat: 48.19340076752928, lng: 16.33338730471151}, bee_type: "Asiatische Rote Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 5, name: "Bee_Hive #6", user_owner: "Marcel Eichel", is_favorite: false, loc: {lat: 48.19019655404771, lng: 16.36205475488387}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 6, name: "Bee_Hive #7", user_owner: "Kerstin Werner", is_favorite: false, loc: {lat: 48.20449952921734, lng: 16.307466436591596}, bee_type: "Riesenhonigbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 7, name: "Bee_Hive #8", user_owner: "Torsten Bauer", is_favorite: false, loc: {lat: 48.138353052239134, lng: 16.321199346853806}, bee_type: "Zwergbuschbiene", sickness: "", small_radius: 5, big_radius: 10},
    { id: 8, name: "Bee_Hive #9", user_owner: "David Nagel", is_favorite: false, loc: {lat: 48.24029666259348, lng: 16.355874945265878}, bee_type: "Kliffhonigbiene ", sickness: "", small_radius: 5, big_radius: 10},
    { id: 9, name: "Bee_Hive #10", user_owner: "Dirk Braun", is_favorite: false, loc: {lat: 48.2407539719454, lng: 16.321027685475528}, bee_type: "Östliche Honigbiene", sickness: "Irgendwas sau tödliches", small_radius: 5, big_radius: 10},
    { id: 10, name: "Bee_Hive #11", user_owner: "Juliane Maur", is_favorite: false, loc: {lat: 48.164670129465236, lng: 16.328065801994182}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10},
]

export let fav_bee_hives: bee_hive[] = [
    { id: 11, name: "Bee_Hive # 12", user_owner: "Wolfgang Dreher", is_favorite: true, loc: {lat: 48.156654729378396, lng: 16.3630847230807}, bee_type: "Westliche Honigbiene", sickness: "", small_radius: 5, big_radius: 10}
]