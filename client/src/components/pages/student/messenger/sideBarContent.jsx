import { useState } from 'react'
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Avatar,
  List,
  Button,
  ListItemButton,
  ListItemAvatar,
  styled,
  Card,
  CardContent,
  CardActions,
} from '@mui/material'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'

const SideBarWrapper = styled(Box)(
  () => `
          padding: '2px';
    `,
)

const StyledTabBox = styled(Box)({
  minHeight: '4px',
  height: '4px',
  boxShadow: '2px',
  border: '0px',
})

const StyledListItemWrapper = styled(Box)({
  padding: '2px',
  marginTop: '2px',
})

const StyledButton = styled(ListItemButton)(
  () => `
        &.MuiButtonBase-root {
            margin:  0;
        }
  `,
)

const SideBarContent = () => {
  const user = {
    name: 'username',
    avatar: '/static/images/avatars/1.jpg',
    course: '情報処理ネットワーク専攻',
  }

  const [state, setState] = useState({
    invisible: true,
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const [currentTab, setCurrentTab] = useState('all')

  const tabs = [
    { value: 'all', label: '全て' },
    { value: 'unread', label: '未読' },
  ]

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value)
  }

  return (
    <SideBarWrapper sx={{marginRight: '2px'}} flex={3}>
      <Box
        bgcolor="#eeeeee"
        display="flex-start"
        flex={1}
        p={2}
        minWidth="300px"
        sx={{ display: { xs: 'none', md: 'block' }, borderRadius: 2 }}
      >
        <Box
          sx={{
            ml: 1,
            flex: 1,
          }}
        >
          <Box
            display="fixed"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5" noWrap>
                {user.name}
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {user.course}
              </Typography>
            </Box>
          </Box>
          <Avatar />
          <FormControlLabel
            control={
              <Switch
                checked={state.invisible}
                onChange={handleChange}
                name="invisible"
                color="primary"
              />
            }
            label="Invisible"
          />
        </Box>
        <TextField
          sx={{
            mt: 2,
            mb: 1,
          }}
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            ),
          }}
          placeholder="検索"
        />
        <Typography
          sx={{
            mb: 1,
            mt: 2,
          }}
          variant="h5"
        >
          チャット
        </Typography>
        <StyledTabBox>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </StyledTabBox>
        <Box mt={7} p={2} bgcolor="#f5f5f5">
          {currentTab === 'all' && (
            <List disablePadding component="div">
              <StyledListItemWrapper>
                <StyledButton size="large">
                  <ListItemAvatar>
                    <Avatar src="/static/images/avatars/1.jpg" />
                  </ListItemAvatar>
                  {user.name}
                </StyledButton>
              </StyledListItemWrapper>
            </List>
          )}
        </Box>
        <Box display="flex" pb={1} mt={4} alignItems="center">
          <Typography
            sx={{
              mr: 1,
            }}
            variant="h5"
          >
            エベント・説明会
          </Typography>
        </Box>
        <Card
          sx={{
            minWidth: 250,
            minHeight: 100,
            maxWidth: 250,
            maxHeight: 100,
            p: 2,
            objectFit: 'cover',
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              イベント名前
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="mediumn">出席</Button>
          </CardActions>
        </Card>
      </Box>
    </SideBarWrapper>
  )
}

export default SideBarContent
