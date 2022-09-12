import { useState } from 'react'
import {
  Box,
  styled,
  Divider,
  Drawer,
  IconButton,
  useTheme,
  Container,
  Stack,
  Grid,
} from '@mui/material'

import React from 'react'

import { BottomBarContent, SideBarContent, TopBarContent } from '.'

import ChatContent from './chatContent'

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
import { light } from '@mui/material/styles/createPalette'

const RootWrapper = styled(Box)(
  () => `
          padding: '2px';
          width: 300px;
    `,
)

const Sidebar = styled(Box)(
  () => `
        width: 300px;
        background: ;

        border-right: solid 2px;
`,
)

const ChatWindow = styled(Box)(
  () => `
        display: flex;
        background: #eeeeee;
        flex-direction: column;
        flex: 2;
`,
)

const ChatTopBar = styled(Box)(
  () => `
        background: #e3f2fd ;
        border-bottom:  solid 1px;
        align-items: center;
`,
)

const IconButtonToggle = styled(IconButton)(
  () => `
  background: ;
`,
)

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`,
)

const GroupChatPage = () => {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Container sx={{mt: 12, minHeight: '100%', minWidth: '100%'}} >

      <RootWrapper>
      <Stack direction="row" spacing={3} justifyContent="space-between" divider={<Divider orientation="vertical" flexItem />}>

          <DrawerWrapperMobile
            sx={{
              display: { lg: 'none', md: 'inline-flex', xs: 'none' },
            }}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            <SideBarContent />
          </DrawerWrapperMobile>

            <Sidebar
              sx={{
                display: { xs: 'none', lg: 'inline-block' },
              }}
            >
              <SideBarContent />
            </Sidebar>

          <ChatWindow minWidth={1400} >
            <ChatTopBar
              sx={{
                display: { xs: 'flex', lg: 'inline-block' },
              }}
            >
              <IconButtonToggle
                sx={{
                  display: { lg: 'none', xs: 'flex' },
                  mr: 2,
                }}
                color="primary"
                onClick={handleDrawerToggle}
                size="small"
              >
                <MenuTwoToneIcon />
              </IconButtonToggle>
              <TopBarContent />
            </ChatTopBar>
            <Box flex={1}>
              <ChatContent />
            </Box>
            <Divider />
            <BottomBarContent />
          </ChatWindow>
          </Stack>
      </RootWrapper>

    </Container>
  )
}

export default GroupChatPage
