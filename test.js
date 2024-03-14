async searchJob(req, res, next) {
    const { limit, ...others }=req.query;

    const { title}= req.body;

    if (title) {
 
        const query = {
            title: { $regex: title, $options: 'i' },
        };
       
        
        try {
            const products = await .find(query );
            return res.status(200).json(jobs);
        } catch (error) {
            return next(error);
        }
    } else {
        const products = await .find({ ...others }).sort({ createdAt: -1 });
        return res.status(200).json(jobs);
    }
}

