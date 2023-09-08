import next from "@/scripts/next";

const useMiddleware = async (req, ...handlers) => {
    try {
        let request = req;
        for (let i = 0; i < handlers.length - 1; i++) {
            request = await handlers[0](request)
        }
        return await handlers[handlers.length - 1](request)
    } catch (error) {
        return next({ error })
    }
}

export default useMiddleware