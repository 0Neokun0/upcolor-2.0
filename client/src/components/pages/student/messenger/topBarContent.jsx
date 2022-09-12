import { useState } from 'react'
import {
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Drawer,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  styled,
  useTheme,
} from '@mui/material'
import { formatDistance, subMinutes } from 'date-fns'

import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import NotificationsOffTwoToneIcon from '@mui/icons-material/NotificationsOffTwoTone'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone'
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone'
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone'

const RootWrapper = styled(Box)(
  () => `
          display: flex;
          align-items: center;
          justify-content: space-between;
          `,
)
const ListItemIconWrapper = styled(ListItemIcon)(
  () => `
          min-width: 36px;
          color: ;
  `,
)

const AccordionSummaryWrapper = styled(AccordionSummary)(
  () => `
          &.Mui-expanded {
            min-height: 48px;
          }

          .MuiAccordionSummary-content.Mui-expanded {
            margin: 12px 0;
          }
            &.Mui-expanded,
            &:hover {
              background: ;

              .MuiSvgIcon-root {
                color: ;
              }
            }
          }
  `,
)

const TopBarContent = () => {
  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [expanded, setExpanded] = useState('section1')

  const handleChange = (section) => (event, isExpanded) => {
    setExpanded(isExpanded ? section : false)
  }
  return (
    <>
      <RootWrapper>
        <Box display="flex" alignItems="center" sx={{ p: 2 }}>
          <Avatar
            variant="rounded"
            sx={{
              width: 48,
              height: 48,
            }}
            alt="user_id"
            src="data:image/jpeg;base64,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/wAldl8U0E7oXVbzG1UrdYI7ZHqPxyOYPxtGfgVypYMddkZh7z1W1UjT4vhIB8irnjezQN3wceJb/wDJ5Kn47RPlpJow072FzaiJuoOaC5c3tuY3P0W4fMyeKrTxGYy91y+jrLLYNINZMO8CAciTeKHfSlManBbOKU7pYZI2uLXOY5rSDYgkEA38V62GpYq2DeG7ZGgRyAcWyt0e1zTw1F/atHA8UbMxuvEAtPaDwHituowmB7zIWuZIRYyQySQvcBwDjGRm8SCVq+7Vpu6z68V2SkcUpIaYtElZDGXdUSvbGT4AnVZTgc3Y0+Dlz/FJB8ayhpWSPJ3cs1Q9sgdYWdGHzvu4jS+WwHipjANq66lgggdRRSCJgY53pcIc4NuBlFzbTLxUpjfq1BHOgPh1yUrbPK4VaxxG0An2VnOCzDUhoA1JLhayxYVRx1VzDVQSBujt08SW8cvBVjabaWuraWenFHFHvLNa4VcJszMC4OFxe7RbTtK0cKka90TKymbDObsjmpniJptqI95Tu6Jt6ruNtE1H6tSRyofQ38kfBKwVcwgbSCPZWbb2hZTUvRcXTyHdQtBAJfILXaBr0etflZZKSDdRtZe+VoBPaQLEnx4rDTYVBE/eNY50hFt5LJJNJbsDpCco8LXWjtDi7YY3m+jQS4/3R3ngo730aL1Esuz0uemq3Dg6uky/2YoWk+/T2LPey84fRGmpaeB4+NsZZRzEtQRIWkdoBDfYrNg2zJdZ89wOIbwPl1R5raMkZDFVxuNab+HHHmuK0hBLbtIPZCK6tATkKC+pyvqKYmlwyWlgWCOqHZnXEYPv8FeYogxoa0WAFgB2JGwNADQABoAOACyrUWi0OmdU4ZBdRo7R0dij1W3uOJ2/AH2b0REVdbBERERERERERERERERERERERERERERFpz0bXkOI6TTcEaEe3mO46LcRegkGoWLmhwo4VC45tXs87CpHSxsJopHF3RF/R3uNyCB+aJ1B9W9j34qTFn2Ba4PadQeII7iOK7K9oIsRcHQgqm4j8GlDI4vh3tK4m59HflYT+icCwewBWWztcKSePz8oRsXBa6lnie9rqiWNuYluVr3sLXEm4LTodTcLfZXCeHI0yv0yukYyUm4sTqGce7vXZIPgupb/AB9RUzt+Q+QMYfpCJrSferVT4TFE1rImmJjRZrIzkYP7IsParTrewgCnt/tXYdJWiBmowAgihqXYeNByAX5xq6/dw5CZY9AwSObKDcd5YLnRa2D0s8k8RE0sjGPbI4va9rRkNx1jqTw07V+lavBIZ2OjmbvY3CxZIc7e4gHgR2jVVab4Lqa/xNVVQt5MEjXtH0d61xHvQW5lCPv7SfSNotDaSAC6lxdh40PMFVKsxV2Ul7wxo4ngLd5K3NjNm34jIyplaWUkZD4muBvPINWvLTrumnUD1j3K2YX8G9DC4SSCSpe03aah+doPdGAGeSuSqunaBSPxVIA5qPosMjjJdbM8m5edTc9nIexSCIqznFxqV5HG2NuqwUHXntOJREReLNERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf/2Q=="
          />
          <Box ml={1}>
            <Typography variant="h4">username</Typography>
            <Typography variant="subtitle1">
              {formatDistance(subMinutes(new Date(), 8), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
          }}
        >
          <Tooltip placement="bottom" title="Conversation information">
            <IconButton color="primary" onClick={handleDrawerToggle}>
              <InfoTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </RootWrapper>
      <Drawer
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        elevation={9}
      >
        <Box
          sx={{
            minWidth: 360,
          }}
          p={2}
        >
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Avatar
              sx={{
                mx: 'auto',
                my: 2,
                width: theme.spacing(12),
                height: theme.spacing(12),
              }}
              variant="rounded"
              alt="Zain Baptista"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhUTEhAWFRUXFx4XFxgXFxYXFhsWFhgYGBcYFxUYHikiGB0lHhYVITIhJikrLi4wGB8zODMsNygvLisBCgoKDg0OGxAQGy8mICYvLTAtLTIwLTItMC0tLy0tLi0tLi0tLS0tLS0tLy8tLS0vLy0vLy0tLS0tLS8vLS0tL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABMEAABAwIDBAYECQgGCwAAAAABAAIDBBEFEiEGEzFBIjJRYXGhFEKBkQcjUmJykrHB0TNDc4OisrPhNFOCwuLwFRYkNURjZHR1tNL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADQRAAEDAQQHCAICAgMAAAAAAAEAAgMRBCExQQUSUWFxgfAGMpGhscHR4RMiI0IU8TNy0v/aAAwDAQACEQMRAD8A7iiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKv4ptJHFdrBvHdnAD281nHE+Q0aKqC0WmKzs15XUHrwGZ4KwKOqsXhi60gHn9ipNfi80/WccvyeXuWgtlFozOR3IfP0uatPaal0DObvgf+uIVzm2siHVa53joPvWqdseyn/b/AMKqy+gK0LBAMRXmfai1btPW55ueBwa33BKtA2w/6f8Ab/wrYp9rYz1o3N9t1TyV8XpsEB/rTmUbp+3NNdevFrfYA+a6HSY1BL1ZNew6fyUkuVLbo8Rlg/JyW8x56KrJowf0d4/I+FsrP2nOE7Obfg/K6WirWG7VMf0ZRkPaNR7RxCsTHggEG4PAjgtbLE+M0eF0tmtkNpbrROr6jiMQvaIijVlERERERERERERERERERERERERERERFgqahsbS97rNHP8O0pUTtjaXONmgXJVCxrFnVDuxg6rVZs1mdMdgGJ6zWs0npNliZtccB7nd6rPjWPPnu1t2s+3xKhkRdBHG2Nuq0UC4C0WmS0SfklNT1cNg3IiIs1AgK+kr4i8ovaoiIvV4iIiIik8Jxh9OeOZnyTw8bqMRYvY17dVwuUsM0kLxJGaEZrpVBWsnZnYbjmOYPgtxc0w6vfTvDmHTmO3uKv9BWsnYHsOh5cx2rQWqymE1Hd6uK73RWlW2xuq654xG3ePcZcKFbiIiqLboiIiIiIiIiIiIiIiIiIiIiKG2jr9xCbHpO0Hh63ksmML3BoxKinmZDG6R+AFeuOA3qv7T4pvXbtp6DT9Y8z7OCgkRdNFE2Noa1fM7VaX2mUyyYnyGQ5feKyDI1j5ZZBHFG3NI866XsAB6xJ0A5le4XTyDNHhcYadWtnqTHO4ciY2sIjJ7CTZamMHSgj9V9RJI7vMERMd+2znX8Vp4/j0kMohhia9+TePL3FrQ3NlAFgSSSD4WWvnlkMmoz1pcLt2YPsuw0Pouzmzte5ge5994BxwAB3Z4qUpXsqC5kYfHOwXkppbCZoHrM5Ss+c3tC9U1M+U2YwuPgT7+xR1Di1NiYbHM18VRHq0h2WphPy4ZB1m+XC4Wlj/pMRJxCaaqpXEBkkbzFTi+lqmGIA5ifWJIN+SzhtD66jqa2/qh8RzxUdr7PwF35GEtArVoFfCt43i/cFOVJhgNqisp4SOLXSsc/6jNfJa0eL4e7hWvf3x01RI36wZZV+LH6aA5adtOxx4CGNsjz9UOcVuHHKyTqU1c/vELmj9stVt0cje/IB4e4KpR2OxkfpBI8bSXX+GqFJuxShHGqlb3vpKpo9pyaLNTz001hDXwSE8GmVsbz4NksVDHGa5nWpK9vfui7yY4rVn2lgeclUIyfk1MLWH3vaD5rwMe7uSNPh7AL19isYH72eRu8E3eOsFa6mhki68ZaORI4+B5rxOY6cNM5dmk/JQRtzTyn5kfIfOOig9n6aeocP9FGSmjDvjJhI51Hx6TWQSZhK/6NgO0XVtqJqLA2mWV75ambi93xlVOexo9VnDQWaNFVntL2/p/bd1QeJ5Yq3ZdAWfWEpLi3JrhTxpeeFG77rlg9Crcuf/RVPa1916W/f+GbLu83dwWo10crN7CXZcxjex4yyRSN60cjeTh5rJs1t5LU1TIKilbEJg7dFkheQ5jc2SS4AOgOo7OCz4m0NrqtoFhJSQyu75I5nRB3iWED2KKKWVsoa/PeTiaZk9XFW9KaKs/+O8iMNc0EigAwFaGlKgjbfmCtBSeA4maeS56jtHj8O9RiLaPY17S12BXDQTvgkEkZoRh1sOa6m1wIuDcHgvarmyOIbxhjcdWcPon+f2qxrmZYzG8sOS+mWS0ttMLZWYHyOY5IiIo1YRERERERERERERERERUHaqr3kzh6rNB426XnorvUTZGl3YD5Bcyc4k3PHifFbLRsdXOfs9+vNcz2mtBbEyEf2NTwGA5k+S8oiy08IdcueGMYM0j3aNY0cSVuHODRU4Lj443SODGCpOA2rXxUdLDf0tR/BCiq1odiDwQCPRW8f0r1oN2gFdiNMWuLYmOlbFCQQWx7s/GvJGrpDc6aAABSuJ4RVS1e8gdGxroRG6V5/J5XlxcI+LzYiw4X4rVSH+Wrrqgm/ievlfU9EUsoja811RQ0GwZdb8L1CY5h4fIyKBrpJzrE2MkSM+eZPUYO0+avOHGSKNrZXNe/IGy82Pdaz9LWIJvy5rFhmHRUjXNhBJfrLK/WWU9r3ch2NGgWwq00uvQDAddBWLTP+aTWAp11wyXulc2AZYIo4W9kTGsHkF6dVSHjI76xWJFDTNV1lFS8fnHfWKnMOaJ4S2ZrZWuJBbI1rmkWAsQRrzVeVhwB14yOxx87LFwXoW/FE1jQxjWsa0ZWtaAGtA4ANGgA7AuLR4bLFVOZXEiqdc7x5zCZt/zD7WyjToC1uzTTti0saweCti3VRHnbe4PB7HcnxvGrXDtClgl/GTv8VNBL+J4fSvW3Jc6oIWtxDDw0AdOX+C7mrBjH+8J//Hs/9pamFbH1cVdA+SZksEBe5khuJnB8ZYGPYBbML9YHUDtUV8IWMOosUZMx3SFKBuyCWzNMr88Tg0Ei4uQ62haFZaQ+Zuqa0HoSetiw0q9lpD9W4ObTDCraYDZuUgiyF0crGTwOzQyi7e0H1mPHItOhC8ELcNeHAEL5VPA+GQxyChGPXpuW7g1ZuJmO5et4cP8APgukLlK6NglRvYGP7R9ht9y1Wk4+68cPhdR2ZtPfgP8A2HofbzUgiItUusREREREREREREREREURtPLlppD4faL+V1QFeNsD/s3i4fiqKt7owfxc/hcL2lef8sA5MHq5ZKiZkEYllaX5jkiiZbPM/jYE6NaBq5x0A71Vts8YqH0+V80EbTIy8EEeZptIC0SVDiS4iwOgsSFubT1JNdKzg2njjgjt/wAxm8mNuRLnAHub3qtbR/kR+kj/AHgvA4vkaThdT26x3hfRNDdmYLNo42h4q8tJrvAO2+lcBdtNarPglXJLX028e59t5bMbkXjNwCeWnBdIXMNm/wCn0/6z+GV09VrddIKbB6lVpu+V5kkDQS4gAcSSAAO8ngvrHAi4IIPMaj3rzLGHtLXAFpBBB4EHQgrjeI1b8Kq5I6OodkDtW8W35sc06OI4X4qGCH8tQDf5eOSiJXZ0sqrsjtkyttHKBHPbQeq+3HLfgfmnz5WoqN7HMOq4IEUngVTkflPB32jh96jFiqahsTS97g1rRcuOgACwpVeq8LG+oY1wYXtDndVpcA4210bxOgPuXDNqPhaqZhuqT4pg0MtvjX94vpH7Ne8cFZfgSwqGRklc6Uy1LnGN2a5MY0PE6uLhY5uzTtU77I5keu+7YM+eQTWvXUlyL4UZ3x4kwscWn0QC7dDbevvqOHBddXIPhYfbEY/+1H8V69sIrMOBUjO8FH7I4rOz0jd1Mf5UO3c0WeJzyxoLzIwh0ZNgCR2K30dSypa8tj3U0VjLEXZxld1ZYpPzkZ4X4g8VzjZ/jP8ApG/uKwYbXGCqpH8fjhC8cjDUERvB7RctdbtHerzyWPLm9deOfG/pDs3Z7bo78w79Ca8zgd2zAiu5WVXbY594MvyXeR1/FU2qh3bi3sP32Vp2GPRkH0fsP4LK30dZyRtB8/tfMdAEst4adjgeQr7K0oiLQrvkRERERERERERERERFBbXsvTnucD933qjFdD2gg3lO8dwP1XA/cueLeaMd/Edx+Fw/aZhFpB2tHkT9Kr7Vy5MTq78HGN4+i+FoBHbwI9hUNtCQYARr8ZH+8FdNpsFdXMjlhF6mFuQsJA30NyQGk6Z2Emw5gkLmmLyjJkIcyQPbdjwWPBuNCDqso2UcG5inldXmF9Q0VpiK06LIab9U3Zg33b6bPYqZ2b/p9N+s/hldOXJ9lZrV1OXHTpj3sK6wqukP+UcPcrTyGrii/PlS68j94bOL3Zjre5dr53X6DVC2q+D81ErpqeRrC83cx9w3MeLmuaDa/G1uN0sUzI3HWzUTgo7anZ6hFbSQYXVZy9gc94fvA1w6QfmHBxAJLeVhwuulU4cGtDyC6wzECwLrakDkLqtbHbHNoCZHvEkpFrgWa0cw2/Ent/nezSkhpLRd1jYE2BNtBflrzUNolDqNBrTM4lehe1UPhMoJZqUuY+zI+m9ljd+oAN+xoLioqfa7E2yti9DGd1+gYpBw45XZ+kBfrcFfImmSICVgBcwCRl8wBcOk2/MakJqugc15p5FMVyrabCsNiw+jlpqjPUvA37M4cQS278zPUyus0doN9eKm/gRr3wyVOUAtLWZge0F2XyLlrYn8GT94TTzM3ZPCTMHNHZcA5vJXPZfAGYfFu2nM5xu99rZjysOQHId57Vamnj/AWB2sTtxxrevKXq6sx1vNjh4WP22XLPhOq2zYgwtBAFMBrb+sd2FXZc1+EGT/AG1tjqIAD9dxVewtH5hwKlYf2C1dn+M/6Rv7i34XmWqpI2a3qoR7pGknwABKrWHVDWukDnal4sNS4kiws0aldE2PwR9M70ypYY5MpbTQu64LgM8zx6hsSGtOupNlemb+x2nDrdmclvLTpeGy6Mo8gXHO+8nobct0/iMgdLIRwJJHgSVZ9iW9GQ94Huzfiqgrxsey1OD2uPlp9xXlv/WCnAL5RoCstv1zscfG73U8iItEu7REREREREREREREREWKRgcC08CCD4cFzKogMbnNPFvHxvZdSVJ2wo8kgkA6418RofuWx0bJqyFu31H1Vc52ks2vA2YYtN/B33TxKr4WTFGNroXwVT9HAZJcoc6N7SHNIvq4XFi2+oJWNFuHxh4ofscFyVmtctmfrxmnodx2hUv/AFbdQVUW8lbK2SN5hewFrS5rg2Rpa7XMGlp/tK4YbiF7MedeR7e4rJW4d6ZAYA4Nla4S0zibAStHVcfkvF2n2KuUVVvWm7Sx7SWSMPWY9ujmuHcVrLQ0uNHdbD87wu/sFs/y4BLngRsP2KEK5IoKlxFzND0h38fYVJQ4hG71rHsOnnwVIscFdW2uUVm31TFVyEEOia8tERAAytNusBcO0vfXiurA34KhYxs3uJ5Jm0u/ilOfotzyRuPWGQ9ZpJJBGo4KWB7G62s3WuuF3v8A72KSOMPeGl2qNpXyj2yp6msjkc17AyFzGtyF7jJI5twAwG4yt81c6KtdKbiF7GW60nQcTpa0fEDjq63LQql7ObMl9YypED4Ima2eMpe/UDLHxaBxN+zgrU7aBmZwip6mbK4tLooXOZmbo4B+jdDpxXsga6n4wcM8sdl3nyrVYyNDHFusDTMYHxUuvihP9Z4WOLahr6Z4AcGThrC5puA5tiQRcEceS0KzbGn4NnjaO3MCfLgoxDIcljUKdr64Riw1d9neVQ8fw81NRC2N1pXhwJIJbu29IudbXjYDxW4NoIHHovc8/MZI/wCxqx4HXFj5KiSnqTK/osaIXWZC06NzEDVx1Jvbgrtmi/G6pu43KnbJ5I4SYGlz8GgCt5z4D6zWhsLQXrqQOsT6XmLu3cl9rd3QC6G95cS4m5JuVVNgaV7aylDhrBHPPLzy7xrg3Uc80oHsVnVyI1e48PV30tX2zrHJBC7FrL+JayvOtRxqvS6Xh9Puo2s7Br48T5kqlbM0e+naSOi3pn7h9nmugLX6TkqWs2X+PXmouzNmox85zuHLHzpzCIiLVrqUREREREREREREREREUfi9CKiJzOZ4HscOH3+9SCLJri0hwxCwkjbIwseKgih4Fcrc0gkEWINiO8IFadqsIvedg19cfYfxVUJXRwTCZmsOfFfNrdY32OYxv5HaMj870JWrtFQtnZJWNeIqiGMukcReOeNmobIBqJBoGvGp4HktpYMfhzUrIR/xNTHG79HE10z/AHljFjaQ3UqdvXlkr2gHyi2BrTca628AfNKHKvEKt0GKslOVwMctrlj9HeLflDvC318xbB2uGWaMOHI9neHDVpWhBhdQ05YKjMPkzguA/WDpAe9UP1deD1xXcqSa4jgSPDRZBVSD13e8rQe2sZ16POPlRSMcPqvylYjiLx1qOqH6q/7pKalegilfTJP6x3vKq9JjDqYOhe2S7ZHkDK8gtc8uBFgRrdSQxJx6tJVH9SR+8QsrX1b+pQvHfI+OMDxFyfJTQPMJJAHkoLTZ2Whmo/CtVCh89ROJIomgNjLbzscG6uv0RYknTis1bX1NOLvqYmHk2Njy4/RaHD8FIVOH1ZNpZmRA8oQXOt2bx/A+AWfDMFYwndx5nHrPcczj9J7kkmDzrOp1vKuWSeWyQiGF1GjC4etKrYwvBauaKOWrxMxb1okYyKMSu3bgC1znuOVpPyRfx5LdOzFMetiFY76O4j/uFZsAB9CZGdTTTTU5PzWua+P9mQLYAU0UTXtrXbhQZ8Nm2q53SXajS1ntLomSkC6nezAO2m7BKSCGmjdHTxOY15Bke8l8shb1TJIeIHICwCIQrDsthO8O9eOg06fOI/D/ADzUr3MgYXHD1PyesFzDRadJWmjnEvOJOQ2mmQ8zvKnNncN3EQzDpu633f571Moi517y9xc7Er6JBCyGNsbMAKdccTvRERYKVERERfEX1ERERERERERERERfFStosCMZMkYuzmPk/wAldl8U0E7oXVbzG1UrdYI7ZHqPxyOYPxtGfgVypYMddkZh7z1W1UjT4vhIB8irnjezQN3wceJb/wDJ5Kn47RPlpJow072FzaiJuoOaC5c3tuY3P0W4fMyeKrTxGYy91y+jrLLYNINZMO8CAciTeKHfSlManBbOKU7pYZI2uLXOY5rSDYgkEA38V62GpYq2DeG7ZGgRyAcWyt0e1zTw1F/atHA8UbMxuvEAtPaDwHituowmB7zIWuZIRYyQySQvcBwDjGRm8SCVq+7Vpu6z68V2SkcUpIaYtElZDGXdUSvbGT4AnVZTgc3Y0+Dlz/FJB8ayhpWSPJ3cs1Q9sgdYWdGHzvu4jS+WwHipjANq66lgggdRRSCJgY53pcIc4NuBlFzbTLxUpjfq1BHOgPh1yUrbPK4VaxxG0An2VnOCzDUhoA1JLhayxYVRx1VzDVQSBujt08SW8cvBVjabaWuraWenFHFHvLNa4VcJszMC4OFxe7RbTtK0cKka90TKymbDObsjmpniJptqI95Tu6Jt6ruNtE1H6tSRyofQ38kfBKwVcwgbSCPZWbb2hZTUvRcXTyHdQtBAJfILXaBr0etflZZKSDdRtZe+VoBPaQLEnx4rDTYVBE/eNY50hFt5LJJNJbsDpCco8LXWjtDi7YY3m+jQS4/3R3ngo730aL1Esuz0uemq3Dg6uky/2YoWk+/T2LPey84fRGmpaeB4+NsZZRzEtQRIWkdoBDfYrNg2zJdZ89wOIbwPl1R5raMkZDFVxuNab+HHHmuK0hBLbtIPZCK6tATkKC+pyvqKYmlwyWlgWCOqHZnXEYPv8FeYogxoa0WAFgB2JGwNADQABoAOACyrUWi0OmdU4ZBdRo7R0dij1W3uOJ2/AH2b0REVdbBERERERERERERERERERERERERERERFpz0bXkOI6TTcEaEe3mO46LcRegkGoWLmhwo4VC45tXs87CpHSxsJopHF3RF/R3uNyCB+aJ1B9W9j34qTFn2Ba4PadQeII7iOK7K9oIsRcHQgqm4j8GlDI4vh3tK4m59HflYT+icCwewBWWztcKSePz8oRsXBa6lnie9rqiWNuYluVr3sLXEm4LTodTcLfZXCeHI0yv0yukYyUm4sTqGce7vXZIPgupb/AB9RUzt+Q+QMYfpCJrSferVT4TFE1rImmJjRZrIzkYP7IsParTrewgCnt/tXYdJWiBmowAgihqXYeNByAX5xq6/dw5CZY9AwSObKDcd5YLnRa2D0s8k8RE0sjGPbI4va9rRkNx1jqTw07V+lavBIZ2OjmbvY3CxZIc7e4gHgR2jVVab4Lqa/xNVVQt5MEjXtH0d61xHvQW5lCPv7SfSNotDaSAC6lxdh40PMFVKsxV2Ul7wxo4ngLd5K3NjNm34jIyplaWUkZD4muBvPINWvLTrumnUD1j3K2YX8G9DC4SSCSpe03aah+doPdGAGeSuSqunaBSPxVIA5qPosMjjJdbM8m5edTc9nIexSCIqznFxqV5HG2NuqwUHXntOJREReLNERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf/2Q=="
            />
            <Typography variant="h4">username</Typography>
            <Typography variant="subtitle2">
              Active{' '}
              {formatDistance(subMinutes(new Date(), 7), new Date(), {
                addSuffix: true,
              })}
            </Typography>
          </Box>
          <Divider
            sx={{
              my: 3,
            }}
          />

          <Accordion
            expanded={expanded === 'section1'}
            onChange={handleChange('section1')}
          >
            <AccordionDetails
              sx={{
                p: 0,
              }}
            ></AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section2'}
            onChange={handleChange('section2')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Privacy & Support</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0,
              }}
            >
              <List component="nav">
                <ListItem button>
                  <ListItemIconWrapper>
                    <NotificationsOffTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Turn off notifications"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <CancelTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Ignore all messages"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <BlockTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Block user"
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <WarningTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="Something's Wrong"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary="Report the conversation and provide feedback"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section3'}
            onChange={handleChange('section3')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Shared Files</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails
              sx={{
                p: 0,
              }}
            >
              <List component="nav">
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="HolidayPictures.zip"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary="You opened in the past year"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="2021Screenshot.jpg"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary="You edited this file yesterday"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary="PresentationDeck.pdf"
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary="Never opened"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  )
}

export default TopBarContent
