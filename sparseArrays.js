// https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function matchingStrings(strings, queries) {
  const results = new Array(queries.length)
  const uniqueQueries = [...new Set(queries)]
  const queriesObj = {}
  uniqueQueries.forEach(query => queriesObj[query] = 0)
  for (let i = 0; i < strings.length; i++) {

    if (elementExistsInObj(strings[i], queriesObj)) {
      queriesObj[strings[i]]++
    }
  }
  for (let i = 0; i < queries.length; i++) {

    if (elementExistsInObj(queries[i], queriesObj)) {
      results[i] = queriesObj[queries[i]]
    }
  }
  return results
}

function elementExistsInObj(key, obj) {
  return obj[key] >= 0
}

const failingStr1 = 'lekgdisnsbfdzpqlkg eagemhdygyv jwvwwnrhuai urcadmrwlqe mpgqsvxrijpombyv mpgqsvxrijpombyv urcadmrwlqe mpgqsvxrijpombyv eagemhdygyv eagemhdygyv jwvwwnrhuai urcadmrwlqe jwvwwnrhuai kvugevicpsdf kvugevicpsdf mpgqsvxrijpombyv urcadmrwlqe mpgqsvxrijpombyv exdafbnobg qhootohpnfvbl suffrbmqgnln exdafbnobg exdafbnobg eagemhdygyv mpgqsvxrijpombyv urcadmrwlqe jwvwwnrhuai lekgdisnsbfdzpqlkg mpgqsvxrijpombyv lekgdisnsbfdzpqlkg jwvwwnrhuai exdafbnobg mpgqsvxrijpombyv kvugevicpsdf qhootohpnfvbl urcadmrwlqe kvugevicpsdf mpgqsvxrijpombyv lekgdisnsbfdzpqlkg mpgqsvxrijpombyv kvugevicpsdf qhootohpnfvbl lxyqetmgdbmh urcadmrwlqe urcadmrwlqe kvugevicpsdf lxyqetmgdbmh urcadmrwlqe lxyqetmgdbmh jwvwwnrhuai qhootohpnfvbl qhootohpnfvbl jwvwwnrhuai lekgdisnsbfdzpqlkg kvugevicpsdf mpgqsvxrijpombyv exdafbnobg kvugevicpsdf lekgdisnsbfdzpqlkg qhootohpnfvbl exdafbnobg qhootohpnfvbl exdafbnobg mpgqsvxrijpombyv suffrbmqgnln mpgqsvxrijpombyv qhootohpnfvbl jwvwwnrhuai mpgqsvxrijpombyv qhootohpnfvbl lekgdisnsbfdzpqlkg eagemhdygyv jwvwwnrhuai kvugevicpsdf eagemhdygyv eagemhdygyv lxyqetmgdbmh qhootohpnfvbl lxyqetmgdbmh exdafbnobg qhootohpnfvbl qhootohpnfvbl exdafbnobg suffrbmqgnln mpgqsvxrijpombyv urcadmrwlqe eagemhdygyv lxyqetmgdbmh urcadmrwlqe suffrbmqgnln qhootohpnfvbl kvugevicpsdf lekgdisnsbfdzpqlkg lxyqetmgdbmh mpgqsvxrijpombyv jwvwwnrhuai lxyqetmgdbmh lxyqetmgdbmh lekgdisnsbfdzpqlkg qhootohpnfvbl'

const failingArray1 = failingStr1.split(' ')

const failQueries1 = 'exdafbnobg eagemhdygyv mpgqsvxrijpombyv kvugevicpsdf lekgdisnsbfdzpqlkg kvugevicpsdf exdafbnobg qhootohpnfvbl eagemhdygyv kvugevicpsdf suffrbmqgnln jwvwwnrhuai lekgdisnsbfdzpqlkg lekgdisnsbfdzpqlkg mpgqsvxrijpombyv jwvwwnrhuai kvugevicpsdf lekgdisnsbfdzpqlkg exdafbnobg suffrbmqgnln qhootohpnfvbl eagemhdygyv exdafbnobg suffrbmqgnln jwvwwnrhuai qhootohpnfvbl eagemhdygyv exdafbnobg exdafbnobg jwvwwnrhuai qhootohpnfvbl lxyqetmgdbmh qhootohpnfvbl suffrbmqgnln lxyqetmgdbmh qhootohpnfvbl eagemhdygyv jwvwwnrhuai eagemhdygyv qhootohpnfvbl mpgqsvxrijpombyv qhootohpnfvbl jwvwwnrhuai exdafbnobg eagemhdygyv eagemhdygyv kvugevicpsdf kvugevicpsdf jwvwwnrhuai urcadmrwlqe lxyqetmgdbmh qhootohpnfvbl exdafbnobg exdafbnobg eagemhdygyv qhootohpnfvbl exdafbnobg exdafbnobg lekgdisnsbfdzpqlkg jwvwwnrhuai eagemhdygyv urcadmrwlqe kvugevicpsdf lekgdisnsbfdzpqlkg jwvwwnrhuai eagemhdygyv lekgdisnsbfdzpqlkg exdafbnobg kvugevicpsdf jwvwwnrhuai exdafbnobg lxyqetmgdbmh exdafbnobg lxyqetmgdbmh jwvwwnrhuai mpgqsvxrijpombyv eagemhdygyv urcadmrwlqe kvugevicpsdf qhootohpnfvbl jwvwwnrhuai eagemhdygyv urcadmrwlqe urcadmrwlqe exdafbnobg qhootohpnfvbl exdafbnobg eagemhdygyv exdafbnobg jwvwwnrhuai eagemhdygyv jwvwwnrhuai mpgqsvxrijpombyv urcadmrwlqe urcadmrwlqe eagemhdygyv eagemhdygyv jwvwwnrhuai suffrbmqgnln eagemhdygyv'

const failQueriesArr1 = failQueries1.split(' ')

console.log(matchingStrings(failingArray1, failQueriesArr1))