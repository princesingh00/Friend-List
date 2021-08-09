import React from 'react'
import "../assets/css/Friend.css"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function Friend(props) {

    const { name, fav } = props;

    return (
        <div className="friend">
            <div className="friend__name">
                {name}
                <span>is your friend</span>
            </div>

            <button>
                <DeleteOutlineIcon />
            </button>
            <button>
                {fav ? <StarIcon /> : <StarBorderOutlinedIcon />}
            </button>

        </div>
    )
}

export default Friend
