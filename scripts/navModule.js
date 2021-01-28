import { CriminalList } from './criminals/criminalList.js'
import { FacilityList } from './facility/facilityList.js'
import { OfficerList } from './officers/officerList.js'
import { witnessList } from './witnesses/witnessList.js'
import { NoteList } from './notes/noteList.js'

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    FacilityList()
})

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    OfficerList()
})

document.querySelector("#witness-nav-link").addEventListener("click", () => {
    witnessList()
})

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    NoteList()
})