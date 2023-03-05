import '../css/manage-user-accounts.css';

export default function ManageUserAccounts(){
    return (
        <div>
            <table width='100%' className='table-alarms'>
                <thead>
                <tr>
                    <th></th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>ROLE</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>test1</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>test2</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>test3</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>test4</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>test5</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>test6</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>test7</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>test8</td>
                        <td>1</td>
                        <td>admin</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                {/* {dataLogView.map((data) => {
                    return (
                    <tr key={data.id}>
                        <td className={data.ack === 'ACK' ? 'ack' : null}>
                        {dayjs(data.activationTime).format(FORMAT_DAY_S_VN)}
                        </td>
                        <td className={data.status === 'ACK' ? 'ack' : 'unack'}>{data.status}</td>
                        <td>{data.objectPath}</td>
                        <td>{data.alarmName}</td>
                        <td>{data.stateLabel}</td>
                        <td>{data.tagValue}</td>
                        <td>
                        <img src={ImgMessage} alt='Message' onClick={() => handleOpenComment(data)} />
                        </td>
                    </tr>
                    );
                })} */}
                </tbody>
            </table>
        </div>
    )
}