import Content from './Content'

const Classes = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='w-full bg-gray-600 h-[100px] p-10 '>
        <h1 className='text-white text-3xl font-bold'>Class Sections </h1>
      </div>
      <div className='w-[1200px] mx-auto'>
        <div className='grid lg:grid-cols-3 gap-5 mb-10'>
          <Content contentTopic='Monday and Wednesday' topicNum='3' courseLevel='Current Status: javaScript' />
          <Content contentTopic='Tuesday and Friday' topicNum='4' courseLevel='Current Status: React.js' />
          <Content contentTopic='Saturday Only' topicNum='1' courseLevel='Current Status: HTML5' />
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl mb-2 border-b-2 border-gray-400'>Students in class</h1>
          <div className='w-full'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Michael</td>
                  <td><progress max={100} value={40}></progress></td>
                  <td>Fair</td>
                </tr>
                <tr>
                  <td>Michael</td>
                  <td><progress max={100} value={40}></progress></td>
                  <td>Fair</td>
                </tr>
                <tr>
                  <td>Michael</td>
                  <td><progress max={100} value={40}></progress></td>
                  <td>Fair</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
