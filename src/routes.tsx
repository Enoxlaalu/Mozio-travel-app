import { lazy } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary'

const SearchPage = lazy(() => import('src/pages/search/SearchPage'))
const ResultsPage = lazy(() => import('src/pages/results/ResultsPage'))

export default createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route
                path="/results"
                element={<ResultsPage />}
                errorElement={<ErrorBoundary />}
            />
            <Route
                index
                element={<SearchPage />}
                errorElement={<ErrorBoundary />}
            />
        </Route>
    )
)
