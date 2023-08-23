function DessertsList(props) {
const lowCallories = props.data
    .filter(i => i.calories < 500)
    .sort((a,b) => a.calories - b.calories)
    .map(i => {
    return (
        <li>
        {i.name} - {i.calories} cal
        </li>
    )
    })
    return <ul>{lowCallories}</ul>;
}

export default DessertsList;

// filter: di filter yang keluar hanya kalori < 500
// sort: di urutkan dari calori terkecil ke terbesar
// map: di map untuk ditampilkan (nama - calori) 
