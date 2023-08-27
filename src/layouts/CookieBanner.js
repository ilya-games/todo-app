import { useEffect, useState } from "react"
import posthog from 'posthog-js'
import { Link, Dialog, DialogTitle, Typography, DialogContent, Divider, Button, DialogActions } from "@mui/material"

function CookieBanner() {

    const [open, setOpen] = useState(true)

    const handleAccept = () => {
        posthog.opt_in_capturing()
        setOpen(false)
    }

    const handleDecline = () => {
        posthog.opt_out_capturing()
        setOpen(false)
    }

    useEffect(() => {
        posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing() 
        ? setOpen(false)
        : setOpen(true)
    }, []);

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle color='secondary.main'>
                Мы используем cookies для улучшения работы нашего сайта и большего удобства 
                его использования.
            </DialogTitle>
            <Divider  variant="middle" />
            <DialogContent>
                <Typography >
                    Продолжая использовать сайт, Вы выражаете свое согласие 
                    на обработку файлов cookies, а также подтверждаете факт ознакомления
                    с <Link href=''>
                        «Политикой обработки файлов cookies»
                    </Link>. Вы можете ограничить или полностью запретить сбор и обработку cookies 
                    в настройках Вашего браузера.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button size='small'
                    onClick={handleDecline}
                >
                    Отклноить
                </Button>
                <Button variant="contained" size='small'
                    onClick={handleAccept}
                >
                    Принять
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CookieBanner