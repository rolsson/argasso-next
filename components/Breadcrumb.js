// flow
import { withRouter } from 'next/router'
import BulmaBreadcrumb from 'react-bulma-components/lib/components/breadcrumb'

const Breadcrumb = ({ router, href }) => {
    // console.log(router, href)
    const items = router.asPath.split('/').reduce((acc, val, idx, arr) => {
        acc.push({
            name: idx === 0 ? 'Start' : val,
            url: idx === 0 ? '' : `${acc[idx-1].url}/${val}`,
        })
        return acc
      }, [])
    // console.log(items)
    return <BulmaBreadcrumb items={items}/>
}
export default withRouter(Breadcrumb)