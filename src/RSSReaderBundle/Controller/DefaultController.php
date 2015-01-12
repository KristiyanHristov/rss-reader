<?php

namespace RSSReaderBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class DefaultController extends Controller
{
    /**
     * @Route(
     *      "/",
     *      name = "home"
     * )
     * @Template()
     */
    public function indexAction()
    {
        return $this->render('RSSReaderBundle:Default:appTemplate.html.twig');
    }
}
