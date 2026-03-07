



export function TeamCards({ teamMember }){


    return(

        <div class="team-card">  
        <table>
            <tr>
                <th>
                    <div class="team-member-image">
                        <img src={teamMember.Picture}></img>
                    </div>
                </th>
            </tr>
            <tr>
                <td>
                    <h4>{teamMember.Name}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="member-position-text">{teamMember.Position}</p>
                </td>
            </tr>
            <tr>
                <td><p class="member-role-text">{teamMember.Role}</p></td>
            </tr>
        </table>
      </div>
    )
}