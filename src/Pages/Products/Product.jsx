import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState } from "react";


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const Products = styled.div`
  .flex {
    display: flex;
  }
  .row {
    flex-direction: row;
  }
  .col {
    flex-direction: column;
  }
  .just-center {
    justify-content: center;
  }
  .jus-sp-betwen {
    justify-content: space-between;
  }
 
`;
function Products() {
  

  return (
    <Products>
            <Grid className="Linkplace" > </Grid>
            <Grid className="Container">

                <Grid className="Left_sidebar"></Grid>
                
                <Grid className="Right_siderbar"></Grid>




            </Grid>



    </Products>
  );
}

export default Products;
