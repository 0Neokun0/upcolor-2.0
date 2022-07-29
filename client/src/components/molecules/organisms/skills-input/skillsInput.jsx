import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import React from "react";

import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import LanguageIcon from "@mui/icons-material/Language";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ToolsAndFrameWorkInput from "./toolsAndFrameWorkInput";
import QualificationInput from "./qualificationInput";
import { LanguageSkillsInput, ProgrammingLanguagesInput } from ".";
export default function SkillsInput() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Card>
        <CardHeader
          action={
            <div>
              <IconButton
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <DeveloperBoardIcon />
                <Typography variant="caption" color="initial">
                  Skills
                </Typography>
              </IconButton>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>
                  <Chip
                    sx={{ mb: 1 }}
                    size="small"
                    color="info"
                    icon={<CodeIcon />}
                    label="プログラミング&nbsp;&bull;&nbsp;技術言語"
                  />
                  <br></br>
                  <Chip
                    sx={{ mb: 1 }}
                    size="small"
                    color="error"
                    icon={<TerminalIcon />}
                    label="ツール&nbsp;&bull;&nbsp;パッケージ"
                  />
                  <br></br>
                  <Chip
                    sx={{ mb: 1 }}
                    size="small"
                    color="secondary"
                    icon={<LanguageIcon />}
                    label="母国語&nbsp;&bull;&nbsp;母国語以外"
                  />
                  <br></br>
                  <Chip
                    sx={{ mb: 1 }}
                    size="small"
                    color="success"
                    icon={<FolderSpecialIcon />}
                    label="技術者試験&nbsp;&bull;&nbsp;国家試験"
                  />
                </Typography>
              </Popover>
            </div>
          }
          title="プログラミング言語 &nbsp;&bull;&nbsp; ツール &nbsp;&bull;&nbsp; フレームワーク"
        />{" "}
        <Divider />
        <CardContent>
          <ProgrammingLanguagesInput />
          <Divider sx={{ mt: 5, mb: 5 }} />
          <ToolsAndFrameWorkInput />
          <Divider sx={{ mt: 5, mb: 5 }} />
          <LanguageSkillsInput />
          <Divider sx={{ mt: 5, mb: 5 }} />
          <QualificationInput />
        </CardContent>
      </Card>
    </>
  );
}
