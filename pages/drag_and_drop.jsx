import React, {useState} from "react";


const DragAndDrop = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: "Card 3"},
        {id: 2, order: 1, text: "Card 1"},
        {id: 3, order: 2, text: "Card 2"},
        {id: 4, order: 4, text: "Card 4"},
    ])
    const [currentCard, setCurrentCard] = useState(null)

    const dragStartHandler = (e, card, inDrop) => { // drag qilinayotgan elementimiz kelib tushadu bu funksiyaga
        e.target.style.border = "1px solid red";
        e.target.style.background = "rgba(0,0,0,1)";
        setCurrentCard(card);
    }

    const dragEndHandler = (e) => { // savatchaga tashalganda ishga tushadi va e bu savatcha
        // console.log("dragEndHandler");
        e.target.style.border = "5px solid purple";
        e.target.style.background = "white";
    }

    const dragLeaveHandler = (e) => { // savatcha elementimizni ustidan ketganda ishga tushadi
        console.log("dragLeaveHandler");
        // e.target.style.border = "1px solid green";
        // e.target.style.background = "white";
    }

    const dragOverHandler = (e) => { // qaysi elementimiz ustida bo'lsa o'sha elementimizda xar nechidir millisekunda shu funksiya ishga tushadi
        e.preventDefault()
        console.log("dragOverHandler")
        e.target.style.background = "lightgray";
        e.target.style.border = "none";
        // console.log(e.target.className);
    }

    const dropHandler = (e, card, inDrop) => {
        e.preventDefault()
        console.log('dropHandler', inDrop)
        setCardList(oldCards => {
            return oldCards.map(c => {
                if(c.id === card.id) {
                    return {...c, order: currentCard.order}
                }
    
                if(c.id === currentCard.id) {
                    return {...c, order: card.order}
                }
    
                return c;
            })
        });
        e.target.style.background = "white"
    }

    const sortCards = (a, b) => {
        if(a.order > b.order) {
            return 1;
        }

        return -1; 
    }
    return <div className={'main'}>
    {
        cardList.sort(sortCards).map(card => {
            return (
                <div 
                    onDragStart={(e) => dragStartHandler(e, card, 'card')}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, card, "card")}
                    draggable={true}
                    className={'card'}
                    key={card.order}
                    >
                    {
                        cardList.map((item) => {
                            return <div className="">{item}</div>
                        })
                    }
                </div>
            )
        })
    }

    <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .main {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card {
            width: 200px;
            height: 300px;
            border-radius: 12px;
            border: 5px solid;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
            cursor: grab;
        }
        .in-drop {
            width: 100px;
            height: 100px;
            border: 3px solid green;
            background-color: rgba(255,0,0,1);
        }
    `}</style>
    </div>
}
export default DragAndDrop;