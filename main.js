import { senators } from './senators.js'
import { representatives } from './representatives.js'

// filter examples

const maleSenators = representatives.filter((senator) => {
    return senator.gender === 'M'
})

const femaleSenators = representatives.filter(senator => senator.gender === 'F')

// map examples

const simpleReps = representatives.map(rep => {
    return {
        name: `${rep.first_name} ${rep.last_name}`,
        party: rep.party
    }
})

const republicans = simpleReps.filter(rep => rep.party === 'R')
const democrats = simpleReps.filter(rep => rep.party === 'D')

const totalVotes = senators.reduce((acc, senator) => {
    return acc + senator.total_votes
}, 0)

const missedVotes = senators.reduce((acc, senator) => {
    return acc + senator.missed_votes
}, 0)