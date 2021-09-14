import styled from "styled-components";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const Section = styled.section`
  background: red;
  /* width: ${(props) => props && "200px"}; */
  color: #fff;
`;

export const TField = styled(TextField)`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "200px",
      height: "200px",
      padding: "4px",

      flexDirection: "column",
      "&:hover": {
        transition: "all 0.4s ease",

        transform: "scale(1.1)",
      },
    },
  })
);
