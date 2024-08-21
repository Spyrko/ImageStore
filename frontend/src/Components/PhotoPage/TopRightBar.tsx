import { IconButton, Tooltip } from "@material-ui/core";
import { CloudDownload, Delete, Info, LibraryAdd, Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function TopRightBar(props: any) {
    const history = useHistory();

    return (
        <div
            className="TopRightBar"
            style={{
                alignSelf: "flex-start",
                justifySelf: "right",
                padding: 10,
            }}
        >
            <Tooltip title="Info">
                <IconButton
                    className="IconButton"
                    color="primary"
                    aria-label="info"
                    onClick={(e) => {
                        e.stopPropagation();
                        props.buttonFunctions.info();
                    }}
                >
                    <Info />
                </IconButton>
            </Tooltip>
            {props.searchByImageEnabled &&
                <Tooltip title="Search for similar">
                    <IconButton
                        className="IconButton"
                        color="primary"
                        aria-label="Search for similar images"
                        onClick={(e) => {
                            e.stopPropagation();
                            history.push(history.location.pathname.split("/").splice(0, history.location.pathname.split("/").length - 2).join("/"))
                            props.buttonFunctions.searchByImageId(props.id);
                        }}
                    >
                        <Search />
                    </IconButton>
                </Tooltip>
            }
        </div>
    );
}
