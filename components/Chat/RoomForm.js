import { useState } from "react";
import Link from "next/link";
import { MIN_USERNAME_LENGTH } from "../../utils/Constants";
import "../../styles/roomForm.scss";

const RoomForm = ({ handleSubmit }) => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [key, setKey] = useState("");
    const [errors, setErrors] = useState({
        usernameErr: null,
        roomErr: null,
        keyErr: null,
    });

    const onJoin = (event) => {
        event.preventDefault();

        const { usernameErr, roomErr, keyErr } = errors;

        if (
            username !== "" &&
            room !== "" &&
            key !== "" &&
            usernameErr == null &&
            roomErr == null &&
            keyErr == null
        ) {
            //Decrypt Room list
            //Check if room exists
            //Get Room Key

            var aes_rooms = null;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "roomkeys.aes", false);
            xmlhttp.send();
            if (xmlhttp.status == 200) {
                aes_rooms = xmlhttp.responseText;
            }
            try {
                var json_rooms = CryptoJS.AES.decrypt(aes_rooms, key).toString(
                    CryptoJS.enc.Utf8
                );
                var rooms = JSON.parse(json_rooms);
                if (rooms.rooms[room] !== undefined) {
                    var pkey = rooms.rooms[room];
                    const user = {
                        username,
                        room,
                        pkey,
                    };
                    handleSubmit(user);
                } else {
                    setErrors({
                        usernameErr: null,
                        roomErr: "Room does not exist!",
                        keyErr: null,
                    });
                }
            } catch (e) {
                console.log(e);
                setErrors({
                    usernameErr: null,
                    roomErr: null,
                    keyErr: "Wrong key!",
                });
            }
        } else {
            // if both the field are null
            if (!usernameErr && !roomErr && !keyErr) {
                setErrors({
                    usernameErr: "Username can't be empty!",
                    roomErr: "Room name can't be empty!",
                    keyErr: "Key can't be empty!",
                });
            }
        }
    };
    /**
     * Validating form fields
     * @param  {String} {name
     * @param  {String} value}
     */
    const validate = ({ name, value }) => {
        let { usernameErr, roomErr, keyErr } = errors;

        switch (name) {
            case "username":
                if (value.length == 0) usernameErr = "Username can't be empty!";
                else if (value.length < MIN_USERNAME_LENGTH)
                    usernameErr = "Username is too short!";
                else usernameErr = null;
                break;
            case "room":
                if (value.length == 0) roomErr = "Room name can't be empty!";
                else if (value.length > 0 && value.includes(" "))
                    roomErr = "Room name can't have spaces!";
                else roomErr = null;
                break;
            case "key":
                if (value.length == 0) keyErr = "Room key can't be empty!";
                else if (value.length !== 12)
                    keyErr = "Room key must be 12 characters!";
                else keyErr = null;
                break;
        }
        setErrors({
            usernameErr,
            roomErr,
            keyErr,
        });
    };

    /**
     * add error class if error exist
     * @param  {String} error
     */
    const addErrorClass = (error) => {
        if (error) return "error";
        return "";
    };

    return (
        <div className="chat-form-container container">
            <div className="row justify-content-center m-0 text-center">
                <h2 className="mt-5 mb-5">Welcome again to An0n Chat!</h2>
            </div>
            <div className="row justify-content-center align-items center m-0">
                <div className="chat-form col-11 col-sm-6 col-md-4 p-0">
                    <div className="row justify-content-center align-items-center m-0">
                        <Link href="/">
                            <a>
                                <img src="/images/chat-logo1.png" alt="icon" />
                            </a>
                        </Link>
                    </div>
                    <form onSubmit={onJoin}>
                        <div
                            className={`form-group ${addErrorClass(
                                errors.usernameErr
                            )}`}>
                            <label>Display name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                    validate(event.target);
                                }}
                            />
                            {errors.usernameErr ? (
                                <span>
                                    <i className="fa fa-exclamation-triangle"></i>
                                    <small className="pl-2">
                                        {errors.usernameErr}
                                    </small>
                                </span>
                            ) : null}
                        </div>
                        <div
                            className={`form-group ${addErrorClass(
                                errors.roomErr
                            )}`}>
                            <label>Room name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="room"
                                value={room}
                                onChange={(event) => {
                                    setRoom(event.target.value);
                                    validate(event.target);
                                }}
                            />
                            {errors.roomErr ? (
                                <span>
                                    <i className="fa fa-exclamation-triangle"></i>
                                    <small className="pl-2">
                                        {errors.roomErr}
                                    </small>
                                </span>
                            ) : null}
                        </div>
                        <div
                            className={`form-group ${addErrorClass(
                                errors.keyErr
                            )}`}>
                            <label>Key</label>
                            <input
                                className="form-control"
                                type="text"
                                name="key"
                                value={key}
                                onChange={(event) => {
                                    setKey(event.target.value);
                                    validate(event.target);
                                }}
                            />
                            {errors.keyErr ? (
                                <span>
                                    <i className="fa fa-exclamation-triangle"></i>
                                    <small className="pl-2">
                                        {errors.keyErr}
                                    </small>
                                </span>
                            ) : null}
                        </div>

                        <input
                            className="btn"
                            type="submit"
                            value="Join Chat"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomForm;
