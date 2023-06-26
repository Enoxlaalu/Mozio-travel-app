import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import Layout from 'src/components/Layout/Layout'
import Spinner from 'src/components/Spinner/Spinner'
import router from 'src/routes'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Layout>
                <Suspense fallback={<Spinner />}>
                    <RouterProvider router={router} />
                </Suspense>
            </Layout>
        </LocalizationProvider>
    )
}

export default App
