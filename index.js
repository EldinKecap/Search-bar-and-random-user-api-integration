
    function getFriends() {
        let numOfFriends = document.getElementById('input').value;
        console.log(numOfFriends);
        let ul = document.getElementById('listOfFriends');
        let list = '';
        if (!numOfFriends||numOfFriends == 0) {
            ul.innerHTML = '';
            return
        }
        fetch(`https://randomuser.me/api/?results=${numOfFriends}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data.results);
            ul.innerHTML='';
            data.results.forEach(e => {
                let li = document.createElement('li')
                let {name} = e
                // console.log(name);
                li.innerHTML = `${name.title + '.' + name.first + ' ' + name.last}`;
                // console.log(list);
                // console.log(li);
                ul.appendChild(li)
              
            });  

            // console.log(list);
             })
    }
let rmListTemp ;
    function searchF() {
        let ul = document.getElementById('listOfFriends');
        let srchVal = document.getElementById('search').value;
        let list = [...ul.childNodes];
        let rmList = rmListTemp||[];
        // console.log(list);
        // console.log(srchVal);
        // console.log(list[0].innerHTML.includes(srchVal));
        // console.log(list.length);
        if (list.innerHTML = '') {
            console.log('empty');
            return ;
        }
        for (let i = 0; i < list.length; i++) {
            if (!list[i].innerHTML.includes(srchVal)) {
                rmList.push(list[i]);
                list.splice(i,1);
                console.log(srchVal);
                i--;
            }
        }
        console.log('RemoveList:');
        console.log(rmList);
        console.log('List:');
        console.log(list);

        for (let i = 0; i < rmList.length; i++) {
            if (rmList[i].innerHTML.includes(srchVal)) {
                list.push(rmList[i]);
                rmList.splice(i,1);
                i--;
            }
        }
        ul.innerHTML = '';
        rmListTemp = rmList;
        list.sort((a,b)=>{
           return a.innerHTML.localeCompare(b.innerHTML);
        })
        for (const it of list) {
            ul.appendChild(it);
        }
    }


let btn = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
    // e.preventDefault();
    getFriends();
})

let srch = document.getElementById('search')
srch.addEventListener('keyup',(e)=>{
    // e.preventDefault();
    console.log('radi');
    searchF();
})