import config from '@/config/defaultSettings'

export const setDocumentTitle = function (title: string) {
    document.title = title
}

export const domTitle = config.title