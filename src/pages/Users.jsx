import LayoutApp from "../components/Layout.jsx";
import TableApp from "../components/Table.jsx"

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Red',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];








function UsersPage() {

    let PaginatedArray = ()=>{

        let arr = []
        for(var i = 0;i < data.length;i++){
            var temp = []
            for(var j = 0;j < 1;j++){
                temp.push(data[i])
            }
            arr.push(temp)
        }
        return arr
    }



    // let result  = PaginatedArray().map((v,i)=>{
    //      return i
    // })

    // console.log("result",result)







    return (
        <div>
            <LayoutApp >
            <h1>Users Page </h1>
            <TableApp data={data} />
                <div >

                {
                    PaginatedArray().map((v,i)=>{
                        return <button key={i}>{i + 1}</button>
                    })
                }

                </div>
                
                



            </LayoutApp>
            


        </div>

    )
}


export default UsersPage;